import { retriveData, updateData } from "@/lib/firebase/services";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await retriveData("users");
    const data = users.map((user: any) => {
      delete user.password;
      return user;
    });
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Get User Success",
      data,
    });
  } else if (req.method === "PUT") {
    const { id, data } = req.body;
    const token = req.headers.authorization?.split(" ")[1] || "";
    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (decoded && decoded.role === "admin") {
          await updateData("users", id, data, (result: boolean) => {
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
