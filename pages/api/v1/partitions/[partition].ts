import { QueryCommand } from '@aws-sdk/lib-dynamodb';
import { NextApiHandler, NextApiResponse, NextApiRequest } from 'next';
import { ddbDocClient } from '@/lib/ddbDocClient';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method !== 'GET') return res.status(405).end();

  try {
    const { partition } = req.query;
    const command = new QueryCommand({
      TableName: 'BADGE-TABLE',
      KeyConditionExpression: '#partition = :partition',
      ExpressionAttributeNames: {
        '#partition': 'partition',
      },
      ExpressionAttributeValues: {
        ':partition': partition,
      },
    });
    const { Items } = await ddbDocClient.send(command);

    if (!Items) {
      return res.status(404).json({ error: 'Not Found' });
    }

    return res.status(200).json({ data: Items });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default handler;
