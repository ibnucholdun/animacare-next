import { retriveDataById } from "@/lib/firebase/services";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id }: any = req.query;
    const data = await retriveDataById("forum", id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Get Product Success",
      data,
    });
  }
}