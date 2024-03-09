'use client';

import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import Link from 'next/link';
import HamburgerSVG from '@/public/svg/svgReactComponent/HamburgerSVG';
import PlusSVG from '@/public/svg/svgReactComponent/PlusSVG';

function NavList() {
  return (
    <div className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href={'https://github.com/RE-BADGEME/fe'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          GITHUB
        </a>
      </Typography>
    </div>
  );
}

const NavbarSimple = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 768 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto w-full max-w-none rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="span"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <Link href={'/home'} className=" text-2xl font-protest text-primary">
            REBADGE-ME
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <HamburgerSVG /> : <PlusSVG />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavbarSimple;
