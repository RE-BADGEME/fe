import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-fit bg-backgroud">
      <div className="flex flex-col items-center justify-center animate-bounce hover:cursor-pointer">
        <Link href={'https://github.com/RE-BADGEME/fe'}>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold">MADE BY</span>
            <Image
              src={'https://avatars.githubusercontent.com/u/152944943?s=48&v=4'}
              width={100}
              height={100}
              alt="profile"
              className="w-12 h-12 rounded-md object-cover"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
