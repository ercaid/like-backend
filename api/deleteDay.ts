// 删除倒数日

import { VercelRequest, VercelResponse } from "@vercel/node";

import { client } from "../utils/mongodb";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  const body = req.body;

  const db = await client.db("like");
  await db.collection("days").deleteOne({ id: body.id });

  res.status(200).json({
    code: 0,
    data: "成功",
  });
};
