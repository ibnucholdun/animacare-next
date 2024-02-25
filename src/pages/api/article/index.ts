import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { addData, retriveDataById, updateData } from "@/lib/firebase/services";
import { compare, hash } from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   if (req.method === "GET") {
  //     const token = req.headers.authorization?.split(" ")[1] || "";
  //     if (token) {
  //       jwt.verify(
  //         token,
  //         process.env.NEXTAUTH_SECRET || "",
  //         async (err: any, decoded: any) => {
  //           if (decoded) {
  //             const profile: any = await retriveDataById("articles", decoded.id);
  //             if (profile) {
  //               profile.id = decoded.id;
  //               res.status(200).json({
  //                 success: true,
  //                 statusCode: 200,
  //                 message: "Get User Success",
  //                 data: profile,
  //               });
  //             } else {
  //               res.status(404).json({
  //                 success: false,
  //                 statusCode: 404,
  //                 message: "Get User not found",
  //                 data: {},
  //               });
  //             }
  //           } else {
  //             res.status(403).json({
  //               success: false,
  //               statusCode: 403,
  //               message: "Unauthorized",
  //               data: {},
  //             });
  //           }
  //         }
  //       );
  //     }
  //   } else
  if (req.method === "POST") {
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
