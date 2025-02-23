// 添加用户数据
import { VercelRequest, VercelResponse } from "@vercel/node";

import { client } from "../utils/mongodb";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const body = req.body;

  // try {
  //   const db = await client.db("xiaomei");
  //   await db.collection("result").insertOne(body);
  //   res.status(200).json({
  //     code: 0,
  //     data: "成功",
  //   });
  // } catch (e) {
  //   res.status(200).json({
  //     code: 1,
  //     data: e,
  //   });
  // }
  res.status(200).json({
    code: 0,
    data: "成功",
  });
};
