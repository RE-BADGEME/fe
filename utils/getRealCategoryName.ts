import { allSelection } from '@/constants/basic-selection';

const getRealCategoryName = (partition: string) => {
  const category = allSelection.find((item) => item.partition === partition);
  if (!category) {
    return 'Others';
  }
  return category.name;
};

export default getRealCategoryName;
