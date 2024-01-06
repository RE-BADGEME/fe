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
            className="border table-fixed border-gray-300"
            {...props}
          ></table>
        ),
        // eslint-disable-next-line
        th: ({ node, ...props }) => (
          <th
            className="py-2 px-4 even:col-span-3 whitespace-nowrap bg-gray-100 border-b border-gray-300 font-semibold text-left"
            {...props}
          ></th>
        ),
        // eslint-disable-next-line
        td: ({ node, ...props }) => (
          <td className="py-2 px-4 even:col-span-3 " {...props}></td>
        ),
        // eslint-disable-next-line
        tr: ({ node, ...props }) => (
          <tr
            className="grid grid-cols-4  items-center border-b-2 border-gray-100"
            {...props}
          ></tr>
        ),
      }}
    >
      {markdown}
    </Markdown>
  );
};

export default MarkDownWrapper;
