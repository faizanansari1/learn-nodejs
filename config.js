const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

con.connect((error) => {
  if (error) {
    console.log("Errr Connection");
  }
});

module.exports = con;
