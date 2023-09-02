import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";
import path from "path";
import hbs from "nodemailer-express-handlebars";
import { transporter } from "../../config/nodemailer";

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

const bookDate = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.json({ message: "Get request error" });
  }
  const bookingData = req.body;
  if (
    !bookingData ||
    !bookingData.name ||
    !bookingData.email ||
    !bookingData.number ||
    !bookingData.justDate ||
    !bookingData.dateTime ||
    !bookingData.product ||
    !bookingData.address
  ) {
    return res.status(400).json({ message: "BookingData is missing" });
  }

  try {
    const find = await prisma.booking.findMany({
      where: {
        date: bookingData.justDate,
        time: bookingData.dateTime,
      },
    });
    if (find.length !== 0) {
      return res.status(400).json({ message: "This time is already booked" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }

  try {
    const book = await prisma.booking.create({
      data: {
        name: bookingData.name,
        number: bookingData.number,
        email: bookingData.email,
        date: bookingData.justDate,
        time: bookingData.dateTime,
        product: bookingData.product,
        location: bookingData.address,
      },
    });

    const mailOptions = {
      template: "booked",
      context: {
        name: bookingData.name,
        number: bookingData.number,
        email: bookingData.email,
        date: bookingData.justDate,
        time: bookingData.dateTime,
        product: bookingData.product,
      },
    };

    const mailOptions1 = {
      template: "bookedcus",
      context: {
        name: bookingData.name,
        number: bookingData.number,
        email: bookingData.email,
        date: bookingData.justDate,
        time: bookingData.dateTime,
        product: bookingData.product,
      },
    };

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: `Booked for: ${bookingData.product}`,
      ...mailOptions,
    });

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: bookingData.email,
      subject: `Booked for: ${bookingData.product}`,
      ...mailOptions1,
    });

    return res.status(200).json({
      message: "You are successfully booked!",
      date: bookingData.justDate,
      hours: bookingData.dateTime,
    });
  } catch (error) {
    return res.status(200).json({ error: error });
  }
};

export default bookDate;
