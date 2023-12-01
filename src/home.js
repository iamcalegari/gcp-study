"use strict";
const { CloudFunctionsServiceClient } = require("@google-cloud/functions").v1;

exports.home = async () => {
  // [START cloudfunctions_v1_generated_CloudFunctionsService_CallFunction_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the function to be called.
   */
  const name = "hello-world";
  /**
   *  Required. Input to be passed to the function.
   */
  // const data = "abc123";

  // Imports the Functions library

  // Instantiates a client
  const functionsClient = new CloudFunctionsServiceClient();

  // Construct request
  const request = {
    name,
    // data,
  };

  // Run request
  const response = await functionsClient.callFunction(request);
  console.log(response);

  return response;
  // [END cloudfunctions_v1_generated_CloudFunctionsService_CallFunction_async]
};
