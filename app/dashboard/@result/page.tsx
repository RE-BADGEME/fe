'use client';

import React from 'react';
import RMarkdown from '@/components/Result/Markdown/Markdown';
import RefreshAll from '@/components/Common/Refresh/RefreshAll';

const Page = () => {
  return (
    <div className="col-span-4 overflow-scroll">
      <div className="w-full flex items-center justify-between p-3">
        <h1 className="text-xl">RESULT</h1>
        <RefreshAll />
      </div>
      <div className="flex flex-col p-3 w-full h-[calc(100vh-120px)] overflow-y-scroll">
        <RMarkdown />
      </div>
    </div>
  );
};

export default Page;
