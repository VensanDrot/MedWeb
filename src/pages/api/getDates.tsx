import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";
import { tr } from "date-fns/locale";

const getDates = async (req: NextApiRequest, res: NextApiResponse) => {
  /* 
    if (req.method !== "POST") {
    return res.json({ message: "Get request error" });
  }
  */

  try {
    const data = await prisma.booking.findMany();

    return res.json(data);
  } catch (error) {
    return res.json({ error: error });
  }
};

export default getDates;
