import React from 'react';
import Link from 'next/link';
import ResetSVG from '@/public/svg/svgReactComponent/ResetSVG';

const Reset = () => {
  return (
    <Link href={'/dashboard'}>
      <div className=" hover:animate-spin">
        <ResetSVG />
      </div>
    </Link>
  );
};

export default Reset;
