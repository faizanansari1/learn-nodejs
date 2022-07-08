const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");

console.log("HTML", publicPath);
app.use(express.static(publicPath));
app.get("*", (_, resp) => {
  resp.sendFile(`${publicPath}/noPage.html`);
});

app.listen(2000);
