// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const appConfig = {
  apiGatewayInvokeUrl:
    'https://marcb9iws1.execute-api.us-east-1.amazonaws.com/Stage/',
  cognitoUserPoolId: 'us-east-1_HCm2Oxajo',
  cognitoAppClientId: '15mggu8u901rnlvqb10t0lgsbk',
  cognitoIdentityPoolId: 'us-east-1:0ae13c41-2517-4891-a89c-70ed694dffad',
  appInstanceArn:
    'arn:aws:chime:us-east-1:097212506913:app-instance/aa4fd0be-50d6-435b-adef-50d260b1f9c7',
  region: 'us-east-1', // Only supported region for Amazon Chime SDK Messaging as of this writing
  attachments_s3_bucket_name:
    'my-demo-stack-chatattachmentsbucket-1hyejo1rjg6ea',
}

// const appConfig = {
//   "aws_project_region": "ap-south-1",
//   "aws_appsync_graphqlEndpoint": "https://y7nk7ngtvnaevezr73o4lroszi.appsync-api.ap-south-1.amazonaws.com/graphql",
//   "aws_appsync_region": "ap-south-1",
//   "aws_appsync_authenticationType": "API_KEY",
//   "aws_appsync_apiKey": "da2-libcmaq3rbgqddy2ryxz2iqgga",
//   "cognitoIdentityPoolId": "ap-south-1:0e702711-96c4-4959-98b9-81324bac6d10",
//   "aws_cognito_region": "ap-south-1",
//   "cognitoUserPoolId": "ap-south-1_DWbOlqdnt",
//   "aws_user_pools_web_client_id": "338gu0ota68vgffrvofmno9l1f",
//   "oauth": {},
//   "aws_user_files_s3_bucket": "cko-bucket160953-develop",
//   "aws_user_files_s3_bucket_region": "ap-south-1",
//   "appInstanceArn": "arn:aws:chime:us-east-1:097212506913:app-instance/3ffa8a88-5227-41e1-a582-ca5378a43799",
//   region: 'us-east-1',  // Only supported region for Amazon Chime SDK Messaging as of this writing
//   cognitoAppClientId: '4t6n3lenapdtih39501iuvth1k',

// };

export default appConfig
