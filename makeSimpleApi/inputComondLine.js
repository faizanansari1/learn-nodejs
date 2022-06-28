// get the value from commond line
// its return an array and in this array has bydefault 2 permetters
// console.log(process.argv[2]);

const fs = require("fs");

const input = process.argv;
if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  // remove file
  fs.unlinkSync(input[3]);
} else {
  console.log("Invalid Arguments");
}
