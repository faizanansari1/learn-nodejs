// Event and EventEmitter
// EventEmitter simply like a button but in node js has no create any button.
// in node js you have to create himsilf event and also use in the API Like Blow in the cods

const express = require("express");
const EventEmitter = require("events");
const app = express();

let count = 0;

const event = new EventEmitter();

event.on("countApi", () => {
  count++;
  console.log("Event Called" + count);
});

app.get("/", (req, resp) => {
  resp.send("Api Called");
  // create event for hit the api
  event.emit("countApi");
});

app.get("/search", (req, resp) => {
  resp.send("search Called");
  event.emit("countApi");
});

app.get("/update", (req, resp) => {
  resp.send("update Called");
  event.emit("countApi");
});

app.listen(5000);
