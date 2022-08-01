const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const app = express();
// request sy body get karny ky liee use karty hain
app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  //   console.warn(data);
  resp.send(data);
});

app.post("/", async (req, resp) => {
  //   console.log(req.body);
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result);
});

app.put("/:name", async (req, resp) => {
  //   console.log(req.body);
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  resp.send({ result: "success" });
});

app.delete("/:id", async (req, resp) => {
  //   console.log("ID:", req.params.id);
  let data = await dbConnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });

  resp.send(result);
});

app.listen(5000);
