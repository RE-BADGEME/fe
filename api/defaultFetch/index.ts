import { getCurrentUrl } from '@/utils/getCurrentUrl';
/**
 * @function fetchBasicCategoryData - 모든 벳지 데이터를 가져옵니다.
 * @returns {Promise} - 벳지 데이터를 담은 Promise 객체를 반환합니다.
 * @throws {Error} - 벳지 데이터를 가져오지 못했을 경우 에러를 반환합니다.
 */

const fetchBasicCategoryData = async (query: string) => {
  const url = getCurrentUrl();
  const response = await fetch(
    `${url}/api/v1/partitions/default?query=${query}`,
    {
      cache: 'force-cache',
    },
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { data } = await response.json();
  return data;
};

export { fetchBasicCategoryData };
