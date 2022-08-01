const dbConnect = require("./mongodb");

const update = async () => {
  let data = await dbConnect();
  let result = await data.updateMany(
    { name: "A88" },
    { $set: { name: "A88 Pro" } }
  );
  console.log("UPDTED Success", result);
};

update();
