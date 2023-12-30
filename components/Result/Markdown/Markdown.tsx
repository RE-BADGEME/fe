'use client';

import React from 'react';
import { useSSRSelector } from '@/hooks/useSSR';
import ClipBoard from '../Clipboard/Clipboard';
import MarkDownWrapper from '@/components/Common/Markdown/MarkDownWrapper';

const RMarkdown = () => {
  const markdown = useSSRSelector();

  return (
    <div className="border-2 w-full ">
      <ClipBoard markdown={markdown} />
      <div className="p-3 w-full ">
        <MarkDownWrapper markdown={markdown} />
      </div>
    </div>
  );
};

export default RMarkdown;
