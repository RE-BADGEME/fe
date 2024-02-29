import React, { ReactNode } from 'react';

const DescriptionBanner = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <section className="w-5/6 h-fit p-5 bg-secondary rounded-lg flex justify-center">
      <article className="w-full">
        <h1 className="text-2xl font-protest text-black">{title}</h1>
        {children}
      </article>
    </section>
  );
};

export default DescriptionBanner;
