export const getDecodeQuery = (query: string) => {
  try {
    // 디코드된 쿼리 문자열을 JSON 파싱 시도
    const decodedQuery = decodeURIComponent(query);
    const parsedQuery = JSON.parse(decodedQuery);

    // 배열 체크
    const checkArrayType = Array.isArray(parsedQuery);

    // 유효한 배열이라면 파싱된 쿼리 반환
    return checkArrayType ? parsedQuery : [];
  } catch (error) {
    return [];
  }
};
