import React, { ReactNode } from 'react';

const template = ({ children }: { children: ReactNode }) => {
  return (
    // <div className="bg-[url('/image/BG-IMAGE.png')] bg-cover">{children}</div>
    <div className="">{children}</div>
  );
};

export default template;
