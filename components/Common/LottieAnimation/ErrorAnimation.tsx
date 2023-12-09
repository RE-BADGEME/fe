'use client';

import { memo } from 'react';
import Lottie from 'react-lottie-player';
import errorAnimation from '@/public/lottie/error.json';

const ErrorAnimation = memo(() => {
  return (
    <Lottie loop animationData={errorAnimation} play className="w-64 h-64 " />
  );
});

export default ErrorAnimation;
