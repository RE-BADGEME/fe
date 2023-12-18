import { allSelection } from '@/constants/basic-selection';

export const getCheckData = (data: string[]) => {
  const filteredData = data.filter((item) => {
    const isExist = allSelection.some((selection) => {
      return selection.partition === item;
    });

    return isExist;
  });
  return filteredData;
};
