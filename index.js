const express = require("express");
const reqFilter = require("./midleware");
const app = express();
const route = express.Router();

// app.use(reqFilter);

// apply for midleware
route.use(route);

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

// use for appling middleware
route.get("/users", (req, res) => {
  res.send("Welcome to users page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About page");
});

// dynamic applying middleware
app.use("/", route);

app.listen(2000);
