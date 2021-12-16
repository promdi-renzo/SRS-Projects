const express = require("express");
const app = express();

app.use(logReq);

app.get("/", (req, res) => {
  res.send("get");
});

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/user", (req, res) => {
  res.send("user");
});

function logReq(req, res, next) {
  console.log(`${new Date().toISOString()}: ${req.originalUrl}`);
  next();
}

app.listen(9000);
