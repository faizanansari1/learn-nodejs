const dbConnect = require("./mongodb");

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteMany({ name: "T88" });
  if (result.acknowledged) {
    console.warn("Record DELETED", result);
  }
};

// agar ap wo data delte karry ho jo apky pass nh hai to wo kessy pata lagy ga .?
// hum result me deletedCount sy pata karskty hain agar data exist nh karta to deletedCount 0 aeega

deleteData();
