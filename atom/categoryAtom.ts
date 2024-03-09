'use client';

import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { DataType } from '@/types/fetchingDataTypes';
import getRealCategoryName from '@/utils/getRealCategoryName';

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

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'categoryAtom',
  storage: sessionStorage,
});

const defaultMarkdown = `Click the badge button to load markdown badges`;

export const categoryAtom = atom<DataType[]>({
  key: 'categoryAtom',
  default: defaultValue,

  effects_UNSTABLE: [persistAtom],
});

export const categorySelector = selector({
  key: 'categorySelector',
  get: ({ get }) => {
    const categories = get(categoryAtom);

    // Group items by partition
    const groupedCategories: Record<string, DataType[]> = {};
    categories.forEach((item) => {
      if (!groupedCategories[item.partition]) {
        groupedCategories[item.partition] = [];
      }
      groupedCategories[item.partition].push(item);
    });

    // Generate markdown
    const markdown = Object.entries(groupedCategories).map(
      ([partition, values]) => {
        const tableRows = values
          .map((value) => {
            const imageMarkdown = value.url
              ? `[![${value.name}](${value.url})](${value.homepage})`
              : '';
            return `| ${imageMarkdown} | ${value.url} |`;
          })
          .join('\n');

        return `# ${getRealCategoryName(
          partition,
        )}\n| BADGE | BADGE-URL |\n| :-------- | :--- |\n${tableRows}`;
      },
    );

    return categories.length === 0 ? defaultMarkdown : markdown.join('\n');
  },
});

export const categorySimpleSelector = selector({
  key: 'categorySimpleSelector',
  get: ({ get }) => {
    const categories = get(categoryAtom);

    // Group items by partition
    const groupedCategories: Record<string, DataType[]> = {};
    categories.forEach((item) => {
      if (!groupedCategories[item.partition]) {
        groupedCategories[item.partition] = [];
      }
      groupedCategories[item.partition].push(item);
    });

    const markdown = Object.entries(groupedCategories).map(
      ([partition, values]) => {
        const tableRows = values
          .map((value) => {
            const imageMarkdown = value.url
              ? `[![${value.name}](${value.url})](${value.homepage})`
              : '';
            return `${imageMarkdown}`;
          })
          .join(' ');

        return `### ${getRealCategoryName(partition)}
        \n${tableRows}`;
      },
    );

    return categories.length === 0 ? defaultMarkdown : markdown.join('\n');
  },
});

export const categorySelectorAtom = atom<boolean>({
  key: 'categorySelectorAtom',
  default: false,
});
