const express = require("express");
require("./config");
const products = require("./product");
const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new products(req.body);
  // save on dataBase
  let result = await data.save();
  console.log("REQ", result);
  resp.send(result);
});

app.get("/list", async (req, resp) => {
  let data = await products.find();
  resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await products.deleteOne(req.params);
  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  // console.warn(req.params);
  let data = await products.updateOne(req.params, { $set: req.body });
  resp.send(data);
});

// for searching

app.get("/search/:key", async (req, resp) => {
  let data = await products.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
    ],
  });

  resp.send(data);
});

app.listen(5000);
