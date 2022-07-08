const express = require("express");
const app = express(); // for exicution

app.get("", (req, res) => {
  res.send("This Is Home Page");
});

app.get("/about", (req, res) => {
  res.send("This Is About Page");
});

app.get("/help", (req, res) => {
  res.send("This Is Helps Page");
});

app.listen(2000);
