const express = require("express");
const app = express(); // for exicution

//What is Express js
//  Express js is a frameWork of node js
// easy to create APIS ,
// easy availabe routes also midleware
// easy to create webpages also css

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
