const fs = require("fs");

const express = require("express");
const app = express();
const port = 3000;

const { home } = require("./home");

app.get("/excel", async (req, res) => {
  const { body } = await home();
  const buffer = Buffer.from(body);

  res.send(fs.writeFileSync("output.xlsx", buffer));
});

app.get("/", async (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
