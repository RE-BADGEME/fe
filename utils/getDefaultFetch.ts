import { fetchBasicCategoryData } from '@/api/defaultFetch';
import { basicData } from '@/constants/basic-selection';
import { getCheckData } from './getCheckData';

/**
 * @function getDefaultFetch - queryArray의 유무에 따라 기본 벳지 데이터를 가져옵니다.
 * @param queryArray - queryArray가 존재할 경우 해당 벳지 데이터를 가져옵니다.
 * @returns
 */

export const getDefaultFetch = async (queryArray?: string[]) => {
  const checkedData = getCheckData(!!queryArray ? queryArray : basicData);
  const encodedData = encodeURIComponent(JSON.stringify(checkedData));
  const data = await fetchBasicCategoryData(encodedData);
  return data;
};
