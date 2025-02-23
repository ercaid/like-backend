import { MongoClient, ServerApiVersion } from "mongodb";

const CONNECTION_STRING =
  "mongodb+srv://chenandongcad:tv5iOiD3ymRvA2Ea@cluster0.a5aj2.mongodb.net";

export const client = new MongoClient(CONNECTION_STRING, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
