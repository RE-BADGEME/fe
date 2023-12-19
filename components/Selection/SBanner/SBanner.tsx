'use client';

import React, { memo } from 'react';
import { useScroll } from 'framer-motion';

import { DataType } from '@/types/fetchingDataTypes';
import SItem from '../SItem/SItem';
import ProgressCircleSVG from '@/public/svg/svgReactComponent/ProgressCircleSVG';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

const SBanner = memo(({ category }: { category: DataType[] }) => {
  const scrollRef = useHorizontalScroll();
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-t from-gray-400 to-gray-200 rounded-lg p-1 shadow-sm hover:ring hover:ring-blue-500">
      <div className="w-full rounded-lg px-6 py-8 bg-white relative">
        <ProgressCircleSVG progress={scrollXProgress} />
        <div>
          <h3>Explore by</h3>
          <strong>{category[0].partition}</strong>
        </div>
        <div className="w-full relative bg-white">
          <div
            className="w-full flex overflow-x-scroll items-center gap-3 py-3 px-6"
            ref={scrollRef}
          >
            {category.map((item: DataType) => {
              return <SItem key={item.id} item={item} />;
            })}
          </div>
          <div className="absolute top-0 -translate-x-1/2 w-12 h-full  bg-gradient-to-r from-backgroud from-80% to-transparent" />
          <div className="absolute top-0 right-0 translate-x-1/2 w-12 h-full  bg-gradient-to-l from-backgroud from-80% to-transparent" />
        </div>
      </div>
    </div>
  );
});

export default SBanner;
