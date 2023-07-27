import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

const getDates = async (req: NextApiRequest, res: NextApiResponse) => {
  /* */

  const bookingDay = req.body;
  try {
    console.log("here");
    const data = await prisma.booking.findMany();
    console.log("here1");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export default getDates;
