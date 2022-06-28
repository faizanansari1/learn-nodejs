const http = require("http");

// create basic server and run in browser .. localhost:45000
// and showing some text

// first method
// http
//   .createServer((req, res) => {
//     res.write("<h1> Hello folder Yahoo.com</h1>");
//     res.end();
//   })
//   .listen(45000);

// secound method
const dataControl = (req, res) => {
  res.write("<h1>Hello Secound <br /> Method 22 </h1>");
  res.end();
};
http.createServer(dataControl).listen(45000);
