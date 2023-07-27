import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

const getDates = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.json({ message: "Get request error" });
  }
  const includingData = req.body;

  try {
    const data = await prisma.booking.findMany({
      where: {
        date: includingData,
      },
    });
    return res.json({ data: data });
  } catch (error) {
    return res.json({ error: error });
  }
};

export default getDates;
