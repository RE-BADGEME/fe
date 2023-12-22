import React from 'react';
import SideBar from '@/components/DashBoard/SideBar/SideBar';
import { selection } from '@/constants/basic-selection';
import { getDecodeQuery } from '@/utils/getDecodeQuery';
import Reset from '@/components/Common/Reset/Reset';

const page = ({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) => {
  const parsedQuery = getDecodeQuery(searchParams.query);

  return (
    <div className="col-span-2 w-full bg-white">
      <div className="w-full p-3 flex justify-between items-center">
        <h1 className="text-xl">CATEGORY</h1>
        <Reset />
      </div>
      <div className="w-full max-h-56 p-4 md:max-h-none md:h-[calc(100vh-150px)] overflow-y-scroll">
        <SideBar selection={selection} query={parsedQuery} />
      </div>
    </div>
  );
};

export default page;
