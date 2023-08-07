import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma";

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await prisma.products.findMany();
    return res.json(data);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export default getProducts;
