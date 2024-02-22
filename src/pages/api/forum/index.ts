import jwt from "jsonwebtoken";
import { addData, retriveData } from "@/lib/firebase/services";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await retriveData("forum");
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Get Product Success",
      data,
    });
  } else if (req.method === "POST") {
    const token = req.headers.authorization?.split(" ")[1] || "";
    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (decoded) {
          let data = req.body;
          data.created_at = new Date();
          data.updated_at = new Date();
          data.user_id = decoded.id;
          await addData("forum", data, (status: boolean, result: any) => {
            if (status) {
              res.status(200).json({
                status: true,
                statusCode: 200,
                message: "Success",
                data: {
                  id: result.id,
                },
              });
            } else {
              res.status(404).json({
                status: false,
                statusCode: 404,
                message: "Failed",
                data: {},
              });
            }
          });
        } else {
          res.status(401).json({
            status: false,
            statusCode: 401,
            message: "Failed",
            data: {},
          });
        }
      }
    );
  }
}
