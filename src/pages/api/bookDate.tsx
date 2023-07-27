import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

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
    !bookingData.dateTime
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
    console.log(find);
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
      },
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
