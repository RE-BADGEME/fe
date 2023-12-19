import { atom } from 'recoil';
import { DataType } from '@/types/fetchingDataTypes';

export const categoryAtom = atom<DataType[][]>({
  key: 'categoryAtom',
  default: [
    [
      {
        homepage: '',
        partition: '',
        url: '',
        id: '',
        name: '',
        install: '',
      },
    ],
  ],
});
