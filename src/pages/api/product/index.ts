import { addData, retriveData, updateData } from "@/lib/firebase/services";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await retriveData("products");
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
        if (decoded && decoded.role === "admin") {
          let data = req.body;
          data.created_at = new Date();
          data.updated_at = new Date();
          data.price = parseInt(data.price);
          data.stock = parseInt(data.stock);
          await addData("products", data, (status: boolean, result: any) => {
            if (status) {
              res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Add Product Success",
                data: { id: result.id },
              });
            } else {
              res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Add Product Failed",
                data: {},
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
          await updateData("products", id, data, (status: boolean) => {
            if (status) {
              res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Update Product Success",
              });
            } else {
              res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Update Product Failed",
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
