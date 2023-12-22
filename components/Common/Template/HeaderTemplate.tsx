import React, { ReactNode } from 'react';
import NavbarSimple from '../Header/Header';

const HeaderTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <section className="relative flex flex-col w-full h-screen overflow-hidden items-center mx-auto bg-white">
      <div className="w-full z-50">
        <NavbarSimple />
      </div>
      <div className="w-full grid grid-cols-10 gap-2">{children}</div>
    </section>
  );
};

export default HeaderTemplate;
