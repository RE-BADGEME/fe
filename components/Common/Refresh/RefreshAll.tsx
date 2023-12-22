'use client';

import React from 'react';
import { useSetRecoilState } from 'recoil';
import { categoryAtom } from '@/atom/categoryAtom';
import ResetSVG from '@/public/svg/svgReactComponent/ResetSVG';

const RefreshAll = () => {
  const setValue = useSetRecoilState(categoryAtom);

  const handleClick = () => {
    setValue([]);
  };

  return (
    <button type="button" className="hover:animate-spin" onClick={handleClick}>
      <ResetSVG />
      {''}
    </button>
  );
};

export default RefreshAll;
