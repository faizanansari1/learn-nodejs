const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "R88",
      brand: "OPPO",
      category: "mobile",
      price: 330,
    },
    {
      name: "T88",
      brand: "OPPO",
      category: "mobile",
      price: 330,
    },
  ]);
  if (result.acknowledged) {
    console.log("DATA Inserted");
  }
};

insert();
