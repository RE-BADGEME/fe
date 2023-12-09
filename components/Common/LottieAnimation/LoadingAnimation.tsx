'use client';

import { memo } from 'react';
import Lottie from 'react-lottie-player';
import loadingAnimation from '@/public/lottie/loading.json';

const LoadingAnimation = memo(() => {
  return (
    <Lottie loop animationData={loadingAnimation} play className="w-32 h-32 " />
  );
});

export default LoadingAnimation;
