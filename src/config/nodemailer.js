import nodemailer from "nodemailer";

var email = process.env.NEXT_PUBLIC_EMAIL;
var pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});
