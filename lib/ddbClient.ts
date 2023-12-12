import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

const REGION = 'ap-northeast-2';

const ddbClient = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
});

export { ddbClient };
