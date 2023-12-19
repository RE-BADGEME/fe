import React from 'react';
import { SelectionGType } from '@/types/selectionTypes';
import SideList from '../SideList/SideList';

const SideBar = ({
  selection,
  query,
}: {
  selection: SelectionGType[];
  query: string[];
}) => {
  return (
    <div className="flex flex-col gap-3">
      {/* custom selection */}
      {selection.slice(1).map((item: SelectionGType) => (
        <div key={item.selectionId} className="border-2">
          <h1 className="text-xl font-bold">{item.selectionName}</h1>
          <SideList selection={item.selection} query={query} />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
