import {
  addData,
  deleteData,
  retriveData,
  retriveDataById,
} from "@/lib/firebase/services";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id }: any = req.query;
    const data = await retriveDataById("articles", id[0]);
    if (data) {
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Get Article Success",
        data: {
          ...data,
          id: id[0],
        },
      });
    }
  } else if (req.method === "POST") {
    // favorite
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
          await addData(
            "favorite_articles",
            data,
            (status: boolean, result: any) => {
              if (status) {
                res.status(200).json({
                  status: true,
                  statusCode: 200,
                  message: "Add Favorite Success",
                  data: {
                    id: result.id,
                  },
                });
              } else {
                res.status(404).json({
                  status: false,
                  statusCode: 404,
                  message: "Add Favorite Failed",
                  data: {},
                });
              }
            }
          );
        } else {
          res.status(401).json({
            status: false,
            statusCode: 401,
            message: "Unauthorized",
            data: {},
          });
        }
      }
    );
  } else if (req.method === "DELETE") {
    // favorite
    const token = req.headers.authorization?.split(" ")[1] || "";
    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (decoded) {
          let { data } = req.body;
          await deleteData("favorite_articles", data, (result: boolean) => {
            if (result) {
              res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Delete User Success",
              });
            } else {
              res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Delete User Failed",
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
