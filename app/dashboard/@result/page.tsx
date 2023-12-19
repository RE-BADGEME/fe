'use client';

import React from 'react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { categoryAtom } from '@/atom/categoryAtom';

const Page = () => {
  const category = useRecoilValue(categoryAtom);

  return (
    <div className="grid col-span-3 bg-white">
      <h1 className="p-3">RESULT</h1>
      {category.slice(1).map((item) => (
        <div key={item.name}>
          <Image src={item.url} alt={item.name} width={100} height={100} />
          <h1>{item.name}</h1>
          <p>{item.homepage}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
