// hum koi sa bhi template use kary hammy view walla folder chahiye hootta hai

const express = require("express");
const path = require("path");
const app = express();
const viewPath = path.join(__dirname, "views");

console.log("Engin Tamplate");

// first initialize the engine
app.set(`view engine`, "ejs");

app.get("/profile", (_, resp) => {
  const users = {
    name: "faizan",
    email: "faizan@gmail.com",
    description: "lorem some thing new here",
    skills: ["php", "js", "python", "c++"],
  };
  resp.render(`profile`, { users });
});

app.get("/login", (_, resp) => {
  resp.render("login");
});

app.listen(2000);
