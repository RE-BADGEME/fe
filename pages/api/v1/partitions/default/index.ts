import { QueryCommand } from '@aws-sdk/lib-dynamodb';
import { NextApiHandler, NextApiResponse, NextApiRequest } from 'next';
import { ddbDocClient } from '@/lib/ddbDocClient';
import { getCheckData } from '@/utils/getCheckData';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method !== 'GET') return res.status(405).end();

  // parallel the query
  try {
    const { query } = req.query;
    console.log('fetch Called');

    // decode query
    const decodeQuery = decodeURIComponent(query as string);

    // parse query
    const parseQuery = JSON.parse(decodeQuery);
    const checkedQuery = getCheckData(parseQuery);

    const promise = checkedQuery.map(async (item: string) => {
      const command = new QueryCommand({
        TableName: 'BADGE-TABLE',
        KeyConditionExpression: '#partition = :partition',
        ExpressionAttributeNames: {
          '#partition': 'partition',
        },
        ExpressionAttributeValues: {
          ':partition': item,
        },
      });

      try {
        const { Items } = await ddbDocClient.send(command);

        if (!Items) {
          return res.status(404).json({ error: 'Not Found Items' });
        }

        return Items;
      } catch (error) {
        return res.status(500).json({ error: 'Internet Server Error' });
      }
    });

    const returnData = await Promise.all(promise);
    return res.status(200).json({ data: returnData });
  } catch (error) {
    return res.status(500).json({ error: 'Internet Server Error' });
  }
};

export default handler;
