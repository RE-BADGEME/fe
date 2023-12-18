import React from 'react';
import { SelectionType } from '@/types/selectionTypes';

const SideItem = ({ sideItem }: { sideItem: SelectionType }) => {
  return <li>{sideItem.name}</li>;
};

export default SideItem;
