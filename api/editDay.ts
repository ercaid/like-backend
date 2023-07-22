// 编辑倒数日

import { VercelRequest, VercelResponse } from "@vercel/node";

import { client } from "../utils/mongodb";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );

  const body = JSON.parse(req.body);

  const db = await client.db("like");
  await db.collection("days").updateOne({ id: body.id }, body);

  res.status(200).json({
    code: 0,
    data: "成功",
  });
};
