import React from 'react';
import { SelectionType } from '@/types/selectionTypes';
import SideItem from '../SideItem/SideItem';

const SideList = ({ selection }: { selection: SelectionType[] }) => {
  return (
    <>
      {selection.map((item: SelectionType) => {
        return (
          <ul key={item.name} className="border-2">
            <SideItem sideItem={item} />
          </ul>
        );
      })}
    </>
  );
};

export default SideList;
