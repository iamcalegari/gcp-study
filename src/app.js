const express = require("express");
const app = express();
const port = 3000;

const { home } = require("./home");

app.get("/", async (req, res) => {
  res.send(await home());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
