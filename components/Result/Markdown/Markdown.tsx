'use client';

import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

const hell0 = () => {
  return (
    <div>
      <h1>TIME TO SAY</h1>
    </div>
  );
};

const markdown = `A paragraph with *emphasis* and **strong importance**.

<h1 className='text-3xl'>A sub heading</h1>
<table>
<thead>
<tr>
<th>First Header</th>
<th>Second Header</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
<tr>
<td>Content Cell</td>
<td>Content Cell</td>
</tr>
</tbody>
</table>
${hell0()}
`;

const RMarkdown = () => {
  return (
    <Markdown
      className={`bg-white p-3`}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        [rehypeHighlight, { noInlineHighlight: false }],
      ]}
    >
      {markdown}
    </Markdown>
  );
};

export default RMarkdown;
