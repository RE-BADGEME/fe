import React, { ReactNode } from 'react';
import NavbarSimple from '../Header/Header';

const HeaderTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <section className="relative flex flex-col w-full h-screen md:overflow-hidden items-center mx-auto bg-white">
      <div className="w-full z-50">
        <NavbarSimple />
      </div>
      <div className="w-full md:grid md:grid-cols-10 flex flex-col divide-y-4 md:divide-none divide-gray-900 items-center md:items-start gap-6 md:gap-2">
        {children}
      </div>
    </section>
  );
};

export default HeaderTemplate;
