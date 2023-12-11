import { headers } from 'next/headers';

export const getCurrentUrl = () => {
  const host = headers().get('host');
  const protocol = process?.env.NODE_ENV === 'production' ? 'https' : 'http';
  const url = `${protocol}://${host}`;

  return url;
};
