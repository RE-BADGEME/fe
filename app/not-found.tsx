import React from 'react';
import Link from 'next/link';
import ErrorAnimation from '@/components/Common/LottieAnimation/ErrorAnimation';
import { commonWords } from '@/constants/common';

const NotFound = () => {
  return (
    <div className="absolute w-screen h-screen flex flex-col items-center justify-center bg-blue-gray-500">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-extrabold">
            {commonWords.error.message}
          </h1>
          <p>{commonWords.error.subMessage}</p>
        </div>
        <ErrorAnimation />
        <Link href="/home">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32"
          >
            버튼
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
