import React from 'react';
import { SelectionType } from '@/types/selectionTypes';
import SideItem from '../SideItem/SideItem';

const SideList = ({
  selection,
  query,
}: {
  selection: SelectionType[];
  query: string[];
}) => {
  return (
    <div className="flex flex-col gap-1 divide-y divide-gray-300">
      {selection.map((item: SelectionType) => {
        return (
          <div key={item.name}>
            <SideItem sideItem={item} query={query} />
          </div>
        );
      })}
    </div>
  );
};

export default SideList;
