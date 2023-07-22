// 添加倒数日

import { VercelRequest, VercelResponse } from "@vercel/node";

import { client } from "../utils/mongodb";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const db = await client.db("like");
  var result = await db
    .collection("days")
    .updateOne({ id: req.body.id }, req.body.content);

  res.status(200).json({
    code: 0,
    data: "成功",
  });
};
