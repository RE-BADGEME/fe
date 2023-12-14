import { NextApiHandler, NextApiResponse, NextApiRequest } from 'next';
import { ScanCommand } from '@aws-sdk/lib-dynamodb';
import { ddbDocClient } from '@/lib/ddbDocClient';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method !== 'GET') return res.status(405).end();

  try {
    const command = new ScanCommand({
      TableName: 'BADGE-TABLE',
    });

    const { Items } = await ddbDocClient.send(command);

    if (!Items) {
      return res.status(404).json({ error: 'Not Found' });
    }

    return res.status(200).json({ categories: Items });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default handler;
