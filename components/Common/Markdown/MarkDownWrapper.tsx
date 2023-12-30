'use client';

import React from 'react';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const MarkDownWrapper = ({ markdown }: { markdown: string }) => {
  return (
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
          <h1 className="text-2xl uppercase" {...props}></h1>
        ),
        // eslint-disable-next-line
        table: ({ node, ...props }) => (
          <table
            className="border table-fixed bg-red-200 border-gray-300"
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
  );
};

export default MarkDownWrapper;
