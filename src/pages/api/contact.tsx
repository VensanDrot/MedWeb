import { transporter } from "../../config/nodemailer";
import hbs from "nodemailer-express-handlebars";
import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const handlebarOptions: any = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve("./src/views"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./src/views"),
  extName: ".handlebars",
};

transporter.use("compile", hbs(handlebarOptions));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.subject || !data.message) {
      return res.json({ message: "Issues with data" });
    }

    console.log(data);

    const mailOptions = {
      template: "email",
      context: {
        name: data.name,
        subject: data.subject,
        number: data.number,
        email: data.email,
        message: data.message,
      },
    };

    try {
      await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_EMAIL,
        to: data.email,
        subject: data.subject,
        ...mailOptions,
      });

      return res.json({ message: "Success" });
    } catch (error: any) {
      return res.json({ message: error.message });
    }
  }
  return res.json({ message: "Bad request" });
};
export default handler;
