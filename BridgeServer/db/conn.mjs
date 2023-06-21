import { MongoClient } from "mongodb";

var connectionString = process.env.ATLAS_URI || "";
connectionString = "mongodb+srv://suchan:Piloom01%21%40@cluster0.lykjk.mongodb.net/test";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("myDB");

export default db;