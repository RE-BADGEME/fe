import React from 'react';
import { DataType } from '@/types/fetchingDataTypes';
import SItem from '../SItem/SItem';

const SBanner = ({ category }: { category: DataType[] }) => {
  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-r from-primary to-secondary rounded-lg p-1 shadow-sm hover:ring hover:ring-blue-500">
      <div className="w-full rounded-lg px-12 py-8 bg-backgroud">
        <div>
          <h3>Explore by</h3>
          <strong>{category[0].partition}</strong>
        </div>
        <div className="w-full flex items-center gap-3 overflow-x-scroll p-3">
          {category.map((item: DataType) => {
            return <SItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SBanner;
