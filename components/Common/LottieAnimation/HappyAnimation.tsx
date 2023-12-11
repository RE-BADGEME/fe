'use client';

import { memo } from 'react';
import Lottie from 'react-lottie-player';
import errorAnimation from '@/public/lottie/happy.json';

const HappyAnimation = memo(() => {
  return (
    <Lottie
      loop
      speed={5}
      animationData={errorAnimation}
      play
      className="w-64 h-64 "
    />
  );
});

export default HappyAnimation;
