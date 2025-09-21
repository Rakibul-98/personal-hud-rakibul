import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import dbConnect from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  res.status(200).json({
    status: "ok",
    state: mongoose.connection.readyState,
  });
}
