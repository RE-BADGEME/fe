import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryAtom, categorySelector } from '@/atom/categoryAtom';

const defaultValue = [
  {
    homepage: '',
    partition: '',
    url: '',
    id: '',
    name: '',
    install: '',
  },
];

const useSSR = () => {
  const [isInitial, setInitial] = useState(true);
  const [value, setValue] = useRecoilState(categoryAtom);

  useEffect(() => {
    setInitial(false);
  }, []);

  return [isInitial ? defaultValue : value, setValue] as const;
};

export default useSSR;

const selectorDefaultValue = `LOADING MARKDOWN BADGES...`;

export const useSSRSelector = () => {
  const [isInitial, setInitial] = useState(true);
  const value = useRecoilValue(categorySelector);

  useEffect(() => {
    setInitial(false);
  }, []);

  return isInitial ? selectorDefaultValue : value;
};
