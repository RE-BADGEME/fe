import React, { ReactNode } from 'react';
import NavbarSimple from '../Header/Header';

const HeaderTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <section className="relative flex flex-col max-w-screen-xl w-full sm:w-4/5 h-screen items-center mx-auto bg-primary">
      <div className="absolute w-full z-50">
        <NavbarSimple />
      </div>
      <div className="absolute w-full top-16 pt-3 bg-blue-gray-50">
        {children}
      </div>
    </section>
  );
};

export default HeaderTemplate;
