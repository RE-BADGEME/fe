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
    <div className="w-full flex items-center justify-center bg-gradient-to-t from-primary to-secondary rounded-lg p-1 shadow-sm hover:ring hover:ring-blue-500">
      <div className="w-full rounded-lg px-12 py-8 bg-backgroud relative">
        <ProgressCircleSVG progress={scrollXProgress} />
        <div>
          <h3>Explore by</h3>
          <strong>{category[0].partition}</strong>
        </div>
        <div
          className="w-full flex overflow-x-scroll items-center gap-3 p-3"
          ref={scrollRef}
        >
          {category.map((item: DataType) => {
            return <SItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
});

export default SBanner;
