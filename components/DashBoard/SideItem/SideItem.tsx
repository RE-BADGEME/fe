'use client';

import React from 'react';
import Link from 'next/link';
import { SelectionType } from '@/types/selectionTypes';
import { getEncodedData } from '@/utils/getEncodedData';

const SideItem = ({
  sideItem,
  query,
}: {
  sideItem: SelectionType;
  query: string[];
}) => {
  const IsAlreadySelected = query.includes(sideItem.partition);

  const getValidQuery = () => {
    // if IsAlreadySelected remomve query
    if (IsAlreadySelected) {
      return `?${new URLSearchParams({
        query: getEncodedData(
          query.filter((item) => item !== sideItem.partition),
        ),
      })}`;
    }
    // if not IsAlreadySelected add query
    return `?${new URLSearchParams({
      query: getEncodedData([...query, sideItem.partition]),
    })}`;
  };

  return (
    <div
      className={`flex justify-between ${
        IsAlreadySelected ? 'text-primary' : 'text-black'
      }`}
    >
      <Link href={`${getValidQuery()}`}>{sideItem.name}</Link>
      {IsAlreadySelected && <p>selected</p>}
    </div>
  );
};

export default SideItem;
