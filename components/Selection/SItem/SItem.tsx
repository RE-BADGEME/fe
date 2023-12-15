import React from 'react';
import Image from 'next/image';
import { DataType } from '@/types/fetchingDataTypes';

const SItem = ({ item }: { item: DataType }) => {
  return (
    <div className="flex flex-col items-start gap-2 p-2 rounded-md shadow-xl bg-secondary hover:ring hover:ring-primary">
      <Image
        src={item.url}
        alt={item.name}
        width={100}
        height={100}
        className="w-auto h-7 object-contain object-left"
      />
      <div className="flex flex-col gap-1">
        <div className=" h-12">
          <strong>{item.name}</strong>
        </div>
        <a
          href={item.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto bg-basic rounded-md p-1 text-center whitespace-nowrap hover:ring hover:ring-primary"
        >
          홈페이지 바로가기
        </a>
      </div>
    </div>
  );
};

export default SItem;
