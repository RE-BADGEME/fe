import React from 'react';
import Image from 'next/image';
import { DataType } from '@/types/fetchingDataTypes';

const SItem = ({ item }: { item: DataType }) => {
  return (
    <div className="flex flex-col  items-start gap-2 p-2 rounded-md shadow-xl hover:ring hover:ring-success">
      <Image
        src={item.url}
        alt={item.name}
        width={100}
        height={100}
        className="w-auto h-7 object-contain object-left"
      />
      <div className="flex flex-col gap-1">
        <div className=" h-12 w-40">
          <p>
            <strong>{item.name}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SItem;
