import { useQuery } from '@tanstack/react-query';
import { fetchBasicCategoryData } from '.';

export const useFBasic = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['basic', 'category'],
    queryFn: fetchBasicCategoryData,
  });

  return { data, isLoading };
};
