"use strict";

const { CloudFunctionsServiceClient } = require("@google-cloud/functions");

async function callFunction(functionFullName, data) {
  const client = new CloudFunctionsServiceClient();

  try {
    const [response] = await client.callFunction({
      name: functionFullName,
      data: JSON.stringify(data),
    });

    // Exiba a resposta
    console.log("TESTE:", response);

    return {
      statusCode: 200,
      body: response.result,
    };
  } catch (err) {
    console.error("Erro ao chamar a função:", err);
  }
}

// Chame a função assincronamente

exports.home = async (data) => {
  // Substitua 'seu-projeto' pelo ID do seu projeto no Google Cloud
  const projectId = "freela-arbitralis-406815";
  const location = "southamerica-east1"; // Substitua pela região onde sua função está implantada
  const functionName = "export-excel-to-emai";

  const functionFullName = `projects/${projectId}/locations/${location}/functions/${functionName}`;

  const dados = {
    data: data || {
      Nome: ["Alan", "Maria", "Pedro"],
      Idade: [25, 30, 35],
      Data_Nascimento: ["1990/05/15", "1985/08/21", "1980/03/10"],
      Cidade: ["São Paulo", "Rio de Janeiro", "Belo Horizonte"],
    },
  };

  // Chame a função
  return await callFunction(functionFullName, dados);
};
