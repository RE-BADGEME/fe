'use client';

import React from 'react';
import Image from 'next/image';
import { DataType } from '@/types/fetchingDataTypes';
import useSSR from '@/hooks/useSSR';

const SItem = ({ item }: { item: DataType }) => {
  const [selected, setSelected] = useSSR();

  const isSelected = selected.some(
    (selectedItem) => selectedItem.name === item.name,
  );

  const handleClicked = () => {
    return !isSelected
      ? setSelected((prev) => [...prev, item])
      : setSelected((prev) =>
          prev.filter((prevItem) => prevItem.name !== item.name),
        );
  };

  const checkIsSelected = () => {
    return !!isSelected ? 'ring-2 ring-success' : '';
  };

  return (
    <button
      type="button"
      onClick={handleClicked}
      className={`flex flex-col items-start gap-2 p-2 rounded-md shadow-xl hover:ring hover:ring-success ${checkIsSelected()}`}
    >
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
    </button>
  );
};

export default SItem;
