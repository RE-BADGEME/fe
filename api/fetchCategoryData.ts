import { getCurrentUrl } from '@/utils/getCurrentUrl';

/**
 * @function fetchCategoryData - 카테고리의 특정 데이터를 가져옵니다.
 * @param category - 검색할 partition 값을 paramter값으로 받습니다. 예시) 'skill', 'package', 'ide'
 * @param name - 검색한 id값을 paramter값으로 받습니다. 예시) 's0', 'p0', 'i2'
 * @returns
 */

const fetchCategoryData = async (category: string, name: string) => {
  const url = getCurrentUrl();
  const response = await fetch(
    `${url}/api/v1/categories/${category}?name=${name}`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const { data } = await response.json();
  return data;
};

export { fetchCategoryData };
