"use strict";

const { CloudFunctionsServiceClient } = require("@google-cloud/functions");

async function callFunction(functionFullName, data) {
  const client = new CloudFunctionsServiceClient();

  try {
    const [response] = await client.callFunction({
      name: functionFullName,
      data,
    });

    // Exiba a resposta
    console.log(response);

    return response;
  } catch (err) {
    console.error("Erro ao chamar a função:", err);
  }
}

// Chame a função assincronamente

exports.home = async () => {
  // Substitua 'seu-projeto' pelo ID do seu projeto no Google Cloud
  const projectId = "freela-arbitralis-406815";
  const location = "southamerica-east1"; // Substitua pela região onde sua função está implantada
  const functionName = "hello-world";

  // Crie o nome da função com base no projeto, localização e nome da função
  const functionFullName = `projects/${projectId}/locations/${location}/functions/${functionName}`;

  // Parâmetros que você deseja passar para a função (opcional)
  const data = '{"key": "value"}';

  // Chame a função
  return await callFunction(functionFullName, data);
};
