const express = require("express");
const app = express();
const port = 3000;

const { home } = require("./home");

app.get("/", (req, res) => {
  res.send(home());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
