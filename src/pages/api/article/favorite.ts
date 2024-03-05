import {
  addData,
  deleteData,
  retriveData,
  retriveDataByField,
  retriveDataById,
  updateData,
} from "@/lib/firebase/services";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const token = req.headers.authorization?.split(" ")[1] || "";
    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (decoded) {
          const favoriteUserId = await retriveDataByField(
            "favorite_articles",
            "user_id",
            decoded.id
          );

          const checkUser = favoriteUserId.filter(
            (item: any) => item.user_id === decoded.id
          );
          if (checkUser.length > 0) {
            res.status(200).json({
              status: true,
              statusCode: 200,
              message: "Get Favorite Success",
              data: checkUser,
            });
          }
        }
      }
    );
  } else if (req.method === "POST") {
    const token = req.headers.authorization?.split(" ")[1] || "";
    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (decoded) {
          const favoriteUserId = await retriveDataByField(
            "favorite_articles",
            "user_id",
            decoded.id
          );

          const checkFavorite = favoriteUserId.filter(
            (item: any) =>
              item.article_id === req.body.article_id &&
              item.user_id === decoded.id
          );

          if (checkFavorite.length === 0) {
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
          }

          if (checkFavorite.length > 0) {
            res.status(200).json({
              status: true,
              statusCode: 200,
              message: "Already Add Favorite",
              data: {},
            });
          }
        }
      }
    );
  } else if (req.method === "DELETE") {
    const token = req.headers.authorization?.split(" ")[1] || "";
    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (decoded) {
          const favoriteUserId = await retriveDataByField(
            "favorite_articles",
            "user_id",
            decoded.id
          );

          const checkFavorite = favoriteUserId.filter(
            (item: any) =>
              item.article_id === req.body.data.article_id &&
              item.user_id === decoded.id
          );

          await deleteData(
            "favorite_articles",
            checkFavorite[0].id,
            (status: boolean, result: any) => {
              if (status) {
                res.status(200).json({
                  status: true,
                  statusCode: 200,
                  message: "Delete Favorite Success",
                  data: {},
                });
              } else {
                res.status(404).json({
                  status: false,
                  statusCode: 404,
                  message: "Delete Favorite Failed",
                  data: {},
                });
              }
            },
            decoded.id
          );
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
