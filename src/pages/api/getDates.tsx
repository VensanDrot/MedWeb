import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

const getDates = async (req: NextApiRequest, res: NextApiResponse) => {
  /* */
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Get request error" });
  }

  const bookingDay = req.body;
  console.log(bookingDay);
  console.log(prisma);
};

export default getDates;
