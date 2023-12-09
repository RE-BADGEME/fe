import React from 'react';
import LoadingAnimation from '@/components/Common/LottieAnimation/LoadingAnimation';
import { commonWords } from '@/constants/common';

const loading = () => {
  return (
    <div className="absolute w-screen h-screen flex flex-col items-center justify-center bg-blue-gray-500">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-extrabold">{commonWords.loading}</h1>
        <LoadingAnimation />
      </div>
    </div>
  );
};

export default loading;
