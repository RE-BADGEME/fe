import React from 'react';
import { DataType } from '@/types/fetchingDataTypes';
import SBanner from '@/components/Selection/SBanner/SBanner';
import { getDefaultFetch } from '@/utils/getDefaultFetch';
import getQueryFetch from '@/utils/getQueryFetch';
import RefreshAll from '@/components/Common/Refresh/RefreshAll';

const page = async ({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) => {
  const data = await getDefaultFetch();
  const addData = await getQueryFetch(searchParams.query);

  return (
    <div className="flex flex-col w-full md:col-span-4 gap-3 ">
      <div className="w-full flex items-center justify-between p-3">
        <h1 className="text-xl font-protest">SELECTION</h1>
        <RefreshAll />
      </div>
      <div className="flex flex-col items-center gap-3 px-3 pt-1 max-h-96 md:max-h-none md:h-[calc(100vh-150px)] overflow-y-scroll">
        {/* 추가 데이터 들어가는 곳 */}
        {addData &&
          addData.reverse().map((item: DataType[]) => {
            return <SBanner key={item[0].partition} category={item} />;
          })}
        {/* 기본 데이터 들어가는 곳 */}
        {data &&
          data.map((item: DataType[]) => {
            return <SBanner key={item[0].partition} category={item} />;
          })}
      </div>
    </div>
  );
};

export default page;
