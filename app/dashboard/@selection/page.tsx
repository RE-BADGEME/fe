import React from 'react';
import { DataType } from '@/types/fetchingDataTypes';
import SBanner from '@/components/Selection/SBanner/SBanner';
import { getDefaultFetch } from '@/utils/getDefaultFetch';
import getQueryFetch from '@/utils/getQueryFetch';

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
    <div className="col-span-6 gap-3">
      <h1 className="p-3">RESULT</h1>
      <div className="flex flex-col items-center gap-3 p-3 h-[calc(100vh-120px)] overflow-y-scroll">
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