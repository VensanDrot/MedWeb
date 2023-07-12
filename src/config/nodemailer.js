import nodemailer from "nodemailer";

var email = process.env.EMAIL;
var pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});
