import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

const getDates = async (req: NextApiRequest, res: NextApiResponse) => {
  /* */
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Get request error" });
  }

  const bookingDay = req.body;
  try {
    console.log("here");
    return res.status(200).json(bookingDay);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export default getDates;
