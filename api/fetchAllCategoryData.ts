import { getCurrentUrl } from '@/utils/getCurrentUrl';

/**
 * @function fetchAllCategoryData - 카테고리의 모든 데이터를 가져옵니다.
 * @param partition - 파티션 이름을 paramter값으로 받습니다. 예시) 'skill', 'package', 'ide'
 * @returns {Promise} - Promise 객체를 반환합니다.
 */

const fetchAllCategoryData = async (partition: string) => {
  const url = getCurrentUrl();
  const response = await fetch(`${url}/api/v1/partitions/${partition}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { data } = await response.json();
  return data;
};

export { fetchAllCategoryData };
