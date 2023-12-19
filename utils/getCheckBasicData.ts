import { basicData } from '@/constants/basic-selection';

export const getCheckBasicData = (query: string[]): boolean => {
  const isExist = query.some((item) => {
    return basicData.includes(item);
  });

  return isExist;
};
