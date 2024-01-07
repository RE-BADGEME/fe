'use client';

import React from 'react';
import { useSSRSelector } from '@/hooks/useSSR';
import ClipBoard from '../Clipboard/Clipboard';
import MarkDownWrapper from '@/components/Common/Markdown/MarkDownWrapper';

const RMarkdown = () => {
  const [view, setView] = React.useState(true);
  const markdown = useSSRSelector();

  const handleClick = () => {
    setView((prev) => !prev);
  };

  return (
    <div className="border-2 w-full">
      <ClipBoard markdown={markdown} view={view} fn={handleClick} />
      <div className="p-3 w-full ">
        {view ? <MarkDownWrapper markdown={markdown} /> : <p>{markdown}</p>}
      </div>
    </div>
  );
};

export default RMarkdown;
