import { VercelRequest, VercelResponse } from "@vercel/node";

import { MongoClient, ServerApiVersion } from "mongodb";

const CONNECTION_STRING =
  "mongodb+srv://ercaid:cad19971127@cluster0.0rntcum.mongodb.net/?retryWrites=true&w=majority";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  const client = new MongoClient(CONNECTION_STRING, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  const db = await client.db("like");
  var result = await db.collection("days").find().toArray();
  console.log(client);
  console.log(db);
  console.log(result);
  res.status(200).json(result);
};
