import { MongoClient, ServerApiVersion } from "mongodb";

const CONNECTION_STRING =
  "mongodb+srv://ercaid:cad19971127@cluster0.0rntcum.mongodb.net/?retryWrites=true&w=majority";

export const client = new MongoClient(CONNECTION_STRING, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
