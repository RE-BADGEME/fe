export const getEncodedData = (data: string[]) => {
  const encodedData = encodeURIComponent(JSON.stringify(data));
  return encodedData;
};
