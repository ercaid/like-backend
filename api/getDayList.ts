import { VercelRequest, VercelResponse } from "@vercel/node";

import { db } from "../utils/mongodb";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  var result = await db.collection("days").find().toArray();

  res.status(200).json(result);
};
