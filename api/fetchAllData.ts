import { getCurrentUrl } from '@/utils/getCurrentUrl';

/**
 * @function fetchAllData - 모든 벳지 데이터를 가져옵니다.
 * @returns {Promise} - 벳지 데이터를 담은 Promise 객체를 반환합니다.
 * @throws {Error} - 벳지 데이터를 가져오지 못했을 경우 에러를 반환합니다.
 */

const fetchAllData = async () => {
  const url = getCurrentUrl();
  const response = await fetch(`${url}/api/v1/category`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { categories } = await response.json();
  return categories;
};

export { fetchAllData };
