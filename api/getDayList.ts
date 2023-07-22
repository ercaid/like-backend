// 查询倒数日列表

import { VercelRequest, VercelResponse } from "@vercel/node";

import { client } from "../utils/mongodb";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const db = await client.db("like");
  var result = await db.collection("days").find().toArray();
  console.log(client);
  console.log(db);
  console.log(result);
  res.status(200).json(result);
};
