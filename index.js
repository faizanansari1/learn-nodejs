// First you have to start appche server and mysql server then create the db the do that work
const express = require("express");
const app = express();
const con = require("./config");
app.use(express.json());

// get data from mysql data base
app.get("/", (req, resp) => {
  con.query("select * from user", (error, result) => {
    if (error) {
      app.send("Some Thing wrong error....");
    } else {
      resp.send(result);
    }
  });
});

app.post("/", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO user SET ?", data, (error, result, field) => {
    if (error) throw error;
    resp.send(result);
  });
});

app.put("/:id", (req, resp) => {
  const data = [
    req.body.name,
    req.body.password,
    req.body.user_type,
    req.body.description,
    req.params.id,
  ];
  con.query(
    "UPDATE user SET name =?, password =?, user_type =?, description =? where id =?",
    data,
    (error, result, field) => {
      if (error) throw error;
      resp.send(result);
    }
  );
});

app.delete("/:id", (req, resp) => {
  con.query("DELETE FROM user WHERE id =" + req.params.id, (error, result) => {
    if (error) throw error;
    resp.send(result);
  });
});

app.listen(5000);
