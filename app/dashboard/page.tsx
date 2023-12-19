import React from 'react';
import SideBar from '@/components/DashBoard/SideBar/SideBar';
import { selection } from '@/constants/basic-selection';
import { getDecodeQuery } from '@/utils/getDecodeQuery';

const page = ({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) => {
  const parsedQuery = getDecodeQuery(searchParams.query);

  return (
    <div className="col-span-2 bg-white ">
      <h1 className="p-3">CATEGORY</h1>
      <div className="w-full h-[calc(100vh-120px)] overflow-y-scroll p-3">
        <SideBar selection={selection} query={parsedQuery} />
      </div>
    </div>
  );
};

export default page;
