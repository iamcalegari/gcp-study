const fs = require("fs");

const express = require("express");
const app = express();
const port = 3000;

const { home } = require("./home");

app.post("/excel", async (req, res) => {
  const { data } = req.body;

  const { body } = await home(data);
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
  res.send(
    "<div><h1>Para fazer download de um arquivo excel, basta chamar a rota /excel</h1></div><p>Tenha um bom dia!</p>"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
