const { MongoClient } = require("mongodb");
// 27017 jub bhi local mongodb sy connect kary gy ye same port rahy ga
const url = "mongodb://localhost:27017";
const database = "e-com";
const client = new MongoClient(url);

const dbConnect = async () => {
  let result = await client.connect();
  let db = result.db(database);
  return (collection = db.collection("products"));
};
module.exports = dbConnect;

// ye DB connect ki file har data base ky liee alag sy banti hai koi c bhi language ho
