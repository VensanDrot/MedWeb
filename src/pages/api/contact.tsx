import { transporter } from "../../config/nodemailer";
import hbs from "nodemailer-express-handlebars";
import fs from "fs";
import path from "path";

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

const handler = async (req: any, res: any) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).send({ message: "Bad request" });
    }

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

      return res.status(200).json({ success: true });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};
export default handler;
