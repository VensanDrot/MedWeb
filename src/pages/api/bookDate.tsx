import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

const bookDate = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.json({ message: "Get request error" });
  }
  const bookingData = req.body;
  //console.log(bookingData);
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
    await prisma.booking.create({
      data: {
        name: bookingData.name,
        email: bookingData.email,
        number: bookingData.number,
        date: bookingData.justDate,
        time: bookingData.dateTime,
      },
    });
    return res.json({ message: "Success" });
  } catch (error) {
    return res.json({ error: error });
  }
};

export default bookDate;
