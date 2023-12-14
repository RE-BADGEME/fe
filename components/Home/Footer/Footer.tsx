import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-56 bg-gradient-to-b from-backgroud via-basic to-basic">
      <div className="flex flex-col items-center justify-center animate-bounce">
        <span className="font-bold">MADE BY</span>
        <Image
          src={'https://avatars.githubusercontent.com/u/152944943?s=48&v=4'}
          width={100}
          height={100}
          alt="profile"
          className="w-12 h-12 rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Footer;
