// 查询倒数日列表

import { VercelRequest, VercelResponse } from "@vercel/node";

import { client } from "../utils/mongodb";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", true as any);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  const db = await client.db("like");
  var result = await db.collection("days").find().toArray();
  console.log(client);
  console.log(db);
  console.log(result);
  res.status(200).json(result);
};
