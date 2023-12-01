const fs = require("fs");

const express = require("express");
const app = express();
const port = 3000;

const { home } = require("./home");

app.get("/excel", async (req, res) => {
  const { body } = await home();
  const buffer = Buffer.from(body, "base64");

  const filePath = "temp.xlsx";
  fs.writeFileSync(filePath, buffer);

  // Configurar os headers para a resposta
  const fileDownloadName = "excel-file.xlsx";
  res.download(filePath, fileDownloadName, (err) => {
    // Remova o arquivo temporário após o download ser concluído ou se houver um erro
    fs.unlinkSync(filePath);
    if (err) {
      console.error("Erro ao baixar o arquivo:", err);
      res.status(500).send("Erro ao baixar o arquivo");
    }
  });
});

app.get("/", async (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
