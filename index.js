// file upload using api .. we need to install multer packege for uploading the file
const express = require("express");
const { now } = require("mongoose");
const multer = require("multer");
const app = express();
app.use(express.json());

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload", upload, (req, resp) => {
  console.log("req>>", req.body);
  resp.send("FILE Uploaded jkahds");
});

app.listen(5000);
