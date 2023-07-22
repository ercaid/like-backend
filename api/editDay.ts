// 编辑倒数日

import { VercelRequest, VercelResponse } from "@vercel/node";

import { client } from "../utils/mongodb";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const body = req.body;

  const db = await client.db("like");
  await db.collection("days").updateOne(
    { id: body.id },
    {
      $set: {
        id: body.id,
        background: body.background,
        description: body.description,
        date: body.date,
        emoji: body.emoji,
        accurate: body.accurate,
      },
    }
  );

  res.status(200).json({
    code: 0,
    data: "成功",
  });
};
