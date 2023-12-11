import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return res.status(405).end();
  return res.status(200).json({ message: 'AMPLIFY에서 되면 기적!' });
};

export default handler;
