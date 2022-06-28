const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/test.txt`;
// create
// fs.writeFileSync(filePath, "hello sample");

// read file
// fs.readFile(filePath, "utf-8", (error, file) => {
//   console.log(file);
// });

// update
// fs.appendFile(filePath, " and this is appending", (error) => {
//   if (!error) console.log("File is updated");
// });

// rename file
// fs.rename(filePath, `${dirPath}/demo.txt`, (error) => {
//   if (!error) console.log("file name is updated!");
// });

// remove
// fs.unlinkSync(`${dirPath}/demo.txt`);

// Question Buffer ?
// Buffer temerary memory location
