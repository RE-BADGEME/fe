'use client';

import React from 'react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { categoryAtom } from '@/atom/categoryAtom';
import RMarkdown from '@/components/Result/Markdown/Markdown';

const Page = () => {
  const category = useRecoilValue(categoryAtom);

  return (
    <div className="w-full col-span-3 bg-red-200">
      <h1 className="p-3">RESULT</h1>
      <div className="flex flex-col p-3">
        {category.slice(1).map((item) => (
          <div key={item.name}>
            <Image src={item.url} alt={item.name} width={100} height={100} />
            <h1>{item.name}</h1>
            <p>{item.homepage}</p>
          </div>
        ))}
        <RMarkdown />
      </div>
    </div>
  );
};

export default Page;
