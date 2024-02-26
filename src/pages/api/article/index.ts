import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { addData, retriveData, updateData } from "@/lib/firebase/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await retriveData("articles");

    const search = req.query.search as string;
    if (search) {
      const filteredData = data.filter((item: any) => {
        return (
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
        );
      });

      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Get Articles Success",
        data: filteredData,
      });
    }

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Get Articles Success",
      data,
    });
  } else if (req.method === "POST") {
    const token = req.headers.authorization?.split(" ")[1] || "";
    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (decoded && decoded.role === "admin") {
          let data = req.body;
          data.created_at = new Date();
          data.updated_at = new Date();
          data.user_id = decoded.id;
          await addData("articles", data, (status: boolean, result: any) => {
            if (status) {
              res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Add Article Success",
                data: { id: result.id },
              });
            } else {
              res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Article Failed",
              });
            }
          });
        } else {
          res.status(403).json({
            success: false,
            statusCode: 403,
            message: "Unauthorized",
          });
        }
      }
    );
  } else if (req.method === "PUT") {
    const { id, data } = req.body;
    const token = req.headers.authorization?.split(" ")[1] || "";
    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (decoded && decoded.role === "admin") {
          await updateData("articles", id, data, (status: boolean) => {
            if (status) {
              res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Update Article Success",
              });
            } else {
              res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Update Article Failed",
              });
            }
          });
        } else {
          res.status(403).json({
            success: false,
            statusCode: 403,
            message: "Unauthorized",
          });
        }
      }
    );
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
