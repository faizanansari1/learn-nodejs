const fs = require("fs");
const path = require("path");
// fs.writeFileSync("test.txt", "this is only test file");
const dirPath = path.join(__dirname, "files");
console.warn("DIR?>", dirPath);

// sigle file in spesific folder
// fs.writeFileSync(`${dirPath}/test.txt`, "hello test");

// list of files spesific folder
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(`${dirPath}/john${i + 1}.txt`, `Dummy text Number ${i + 1}`);
// }

// read the file when we need the content insite the files

fs.readdir(dirPath, (error, files) => {
  //   console.log(files[0]);
  files.forEach((item) => {
    console.log("FILE NAME:", item);
  });
});
