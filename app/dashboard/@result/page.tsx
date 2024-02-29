'use client';

import React from 'react';
import RMarkdown from '@/components/Result/Markdown/Markdown';
import RefreshAll from '@/components/Common/Refresh/RefreshAll';

const Page = () => {
  return (
    <div className="flex flex-col w-full md:col-span-4 md:overflow-scroll">
      <div className="w-full flex items-center justify-between p-3">
        <h1 className="text-xl font-protest">RESULT</h1>
        <RefreshAll />
      </div>
      <div className="flex flex-col py-3 w-full md:h-[calc(100vh-150px)] overflow-y-scroll">
        <RMarkdown />
      </div>
    </div>
  );
};

export default Page;
