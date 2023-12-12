import { NextApiHandler, NextApiResponse, NextApiRequest } from 'next';
import { ScanCommand } from '@aws-sdk/lib-dynamodb';
import { ddbDocClient } from '@/lib/ddbDocClient';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method !== 'GET') return res.status(405).end();

  const { Items } = await ddbDocClient.send(
    new ScanCommand({ TableName: 'BADGE' }),
  );

  return res.status(200).json({ categories: Items });
};

export default handler;
