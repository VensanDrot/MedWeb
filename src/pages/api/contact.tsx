import { transporter } from "../../config/nodemailer";
import hbs from "nodemailer-express-handlebars";
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

//handle sending email
const handler = async (req: any, res: any) => {
  //check if method is POST
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.number || !data.message || !data.subject) {
      return res.status(400).json({ error: "Bad request" });
    }
    const mailOptions = {
      //...generateEmailContent(data),
      from: process.env.EMAIL,
      to: data.email,
      subject: data.subject,
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
      transporter.sendMail(mailOptions);
      // Send success
      return res.status(200).send({ success: "good" });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  return res.status(400).json({ error: "Bad request" });
};

export default handler;
