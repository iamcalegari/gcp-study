const express = require("express");
const app = express();
const port = 3000;

const { home } = require("./home");

app.get("/excel", async (req, res) => {
  const bufferStr = await home();
  const buffer = Buffer.from(bufferStr);
  res.send(buffer);
});

app.get("/", async (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
