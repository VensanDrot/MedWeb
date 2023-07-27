import { transporter } from "../../config/nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const handlebarOptions: any = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: "./src/views",
    defaultLayout: false,
  },
  //path.resolve("./src/views")
  viewPath: "./src/views",
  extName: ".handlebars",
};

transporter.use("compile", hbs(handlebarOptions));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.json({ message: "Issues with data" });
    }

    let mailOptions = {
      template: "email",
      context: {
        name: data.name,
        subject: data.subject,
        number: data.number,
        email: data.email,
        message: data.message,
      },
    };

    let mailOptions1 = {
      template: "message",
      context: {
        name: data.name,
        subject: data.subject,
        number: data.number,
        email: data.email,
        message: data.message,
      },
    };

    try {
      await transporter
        .sendMail({
          from: process.env.NEXT_PUBLIC_EMAIL,
          to: data.email,
          subject: data.subject,
          ...mailOptions,
        })
        .then((res) => {
          console.log(res);
        });

      return res.json({ message: "Message was sent successfully" });
    } catch (error: any) {
      return res.json({ message: error.message });
    }
  }
  return res.json({ message: "Bad request" });
};
export default handler;
