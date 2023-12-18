import React from 'react';
import { SelectionGType } from '@/types/selectionTypes';
import SideList from '../SideList/SideList';

const SideBar = ({ selection }: { selection: SelectionGType[] }) => {
  return (
    <div className="flex flex-col gap-3">
      {selection.map((item: SelectionGType) => (
        <div key={item.selectionId} className="border-2 border-black">
          <h1 className="text-xl">{item.selectionName}</h1>
          <SideList selection={item.selection} />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
