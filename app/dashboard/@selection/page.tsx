import React from 'react';
import { DataType } from '@/types/fetchingDataTypes';
import SBanner from '@/components/Selection/SBanner/SBanner';
import { getDefaultFetch } from '@/utils/getDefaultFetch';

const page = async ({
  searchParams,
}: {
  searchParams: {
    init: string;
  };
}) => {
  console.log(searchParams);
  const data = await getDefaultFetch();

  return (
    <div className="col-span-6 gap-3">
      <h1 className="p-3">RESULT</h1>
      <div className="flex flex-col items-center gap-3 p-3 h-[calc()]">
        {data &&
          data.map((item: DataType[]) => {
            return <SBanner key={item[0].partition} category={item} />;
          })}
      </div>
    </div>
  );
};

export default page;
