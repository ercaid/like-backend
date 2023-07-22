// 查询倒数日列表

import { VercelRequest, VercelResponse } from "@vercel/node";

import { client } from "../utils/mongodb";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );

  const db = await client.db("like");
  var result = await db.collection("days").find().toArray();
  console.log(client);
  console.log(db);
  console.log(result);
  res.status(200).json(result);
};
