import { GetCommand } from '@aws-sdk/lib-dynamodb';
import { NextApiHandler, NextApiResponse, NextApiRequest } from 'next';
import { ddbDocClient } from '@/lib/ddbDocClient';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method !== 'GET') return res.status(405).end();

  try {
    const { partition, name } = req.query;
    const command = new GetCommand({
      TableName: 'BADGE-TABLE',
      Key: {
        partition,
        name,
      },
    });
    const { Item } = await ddbDocClient.send(command);

    if (!Item) {
      return res.status(404).json({ error: 'Not Found' });
    }

    return res.status(200).json({ data: Item });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default handler;
