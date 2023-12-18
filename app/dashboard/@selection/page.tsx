import React from 'react';
import { fetchBasicCategoryData } from '@/api/fetchBasicCategoryData';
import { DataType } from '@/types/fetchingDataTypes';
import Banner from '@/components/Common/Banner/Banner';
import SBanner from '@/components/Selection/SBanner/SBanner';

const page = async () => {
  const data = await fetchBasicCategoryData();

  return (
    <div className="col-span-6 gap-3 bg-blue-400">
      <div>
        <Banner />
        <div className="flex flex-col items-center gap-3">
          {data.map((item: DataType[]) => {
            return <SBanner key={item[0].partition} category={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
