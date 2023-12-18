import React, { ReactNode } from 'react';
import NavbarSimple from '../Header/Header';

const HeaderTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <section className="relative flex flex-col w-full h-screen items-center mx-auto bg-primary">
      <div className="w-full z-50">
        <NavbarSimple />
      </div>
      <div className="w-full grid grid-cols-9 bg-blue-gray-50">{children}</div>
    </section>
  );
};

export default HeaderTemplate;
