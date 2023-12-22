'use client';

import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { useSSRSelector } from '@/hooks/useSSR';
import ClipBoard from '../Clipboard/Clipboard';

const RMarkdown = () => {
  const markdown = useSSRSelector();

  return (
    <div className="border-2 w-full ">
      <ClipBoard markdown={markdown} />
      <div className="p-3 w-full ">
        <Markdown
          className={`bg-white flex w-full overflow-x-scroll flex-col gap-3`}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeRaw,
            [rehypeHighlight, { noInlineHighlight: false }],
          ]}
          components={{
            // eslint-disable-next-line
            h1: ({ node, ...props }) => (
              // eslint-disable-next-line
              <h1 className="text-3xl uppercase" {...props}></h1>
            ),
            // eslint-disable-next-line
            table: ({ node, ...props }) => (
              <table
                className="w-full border border-gray-300"
                {...props}
              ></table>
            ),
            // eslint-disable-next-line
            th: ({ node, ...props }) => (
              <th
                className="py-2 px-4 w-full bg-gray-100 border-b border-gray-300 font-semibold text-left"
                {...props}
              ></th>
            ),
            // eslint-disable-next-line
            td: ({ node, ...props }) => (
              <td
                className="py-2 px-4 w-full border-b border-gray-300"
                {...props}
              ></td>
            ),
          }}
        >
          {markdown}
        </Markdown>
      </div>
    </div>
  );
};

export default RMarkdown;
