import React from 'react';
import SideBar from '@/components/DashBoard/SideBar/SideBar';
import { selection } from '@/constants/basic-selection';

const page = () => {
  return (
    <div className="col-span-2 bg-white ">
      <h1 className="p-3">CATEGORY</h1>
      <div>
        <div className="text-xl">My Selection</div>
        <SideBar selection={selection} />
      </div>
    </div>
  );
};

export default page;
