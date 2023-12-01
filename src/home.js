"use strict";

const { GoogleAuth } = require("google-auth-library");
const axios = require("axios");

exports.home = async () => {
  try {
    const accessToken = await getAccessToken();
    const result = await callCloudFunction(accessToken);

    res.json({ result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

async function getAccessToken() {
  const auth = new GoogleAuth();
  const client = await auth.getClient({
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });

  const tokens = await client.getAccessToken();
  return tokens.token;
}

async function callCloudFunction(accessToken) {
  // Substitua este trecho com a lógica específica da sua Cloud Function
  const cloudFunctionUrl =
    "https://southamerica-east1-freela-arbitralis-406815.cloudfunctions.net/hello-world"; // Substitua pelo URL da sua Cloud Function
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await axios.get(cloudFunctionUrl, { headers });

  if (response.status !== 200) {
    throw new Error(
      `Cloud Function request failed with status ${response.status}`
    );
  }

  return response.data;
}
