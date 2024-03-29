import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { retriveDataById, updateData } from "@/lib/firebase/services";
import { compare, hash } from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const token = req.headers.authorization?.split(" ")[1] || "";
    if (token) {
      jwt.verify(
        token,
        process.env.NEXTAUTH_SECRET || "",
        async (err: any, decoded: any) => {
          if (decoded) {
            const profile: any = await retriveDataById("users", decoded.id);
            profile.id = decoded?.id;
            if (profile) {
              res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Get User Success",
                data: profile,
              });
            } else {
              res.status(404).json({
                success: false,
                statusCode: 404,
                message: "Get User not found",
                data: {},
              });
            }
          } else {
            res.status(403).json({
              success: false,
              statusCode: 403,
              message: "Unauthorized",
              data: {},
            });
          }
        }
      );
    }
  } else if (req.method === "PUT") {
    const { data } = req.body;
    const token = req.headers.authorization?.split(" ")[1] || "";
    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (decoded) {
          if (data.password) {
            const comparePassword = await compare(
              data.oldPassword,
              data.encryptedPassword
            );
            if (!comparePassword) {
              res.status(400).json({
                success: true,
                statusCode: 400,
                message: "Old password not match",
              });
            }
            delete data.oldPassword;
            delete data.encryptedPassword;
            data.password = await hash(data.password, 10);
          }
          await updateData("users", decoded.id, data, (result: boolean) => {
            if (result) {
              res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Update User Success",
              });
            } else {
              res.status(400).json({
                success: false,
                statusCode: 400,
                message: "Update User Failed",
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
