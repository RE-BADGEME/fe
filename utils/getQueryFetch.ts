import { redirect } from 'next/navigation';
import { getDecodeQuery } from './getDecodeQuery';
import { getDefaultFetch } from './getDefaultFetch';
import { getCheckBasicData } from './getCheckBasicData';

const getQueryFetch = async (query: string) => {
  if (!query) return null;
  const validQuery = getDecodeQuery(query);

  if (getCheckBasicData(validQuery)) return redirect('/dashboard');
  const data = await getDefaultFetch(validQuery);
  return data;
};

export default getQueryFetch;
