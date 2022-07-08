const express = require("express");
const app = express();

app.get("", (req, res) => {
  console.log(req.query);
  res.send(`Welcome ${req.query.name}`);
});
app.listen(2000);
