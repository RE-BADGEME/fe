import React from 'react';
import SimpleButton from '../Button/SimpleButton';

const Banner = () => {
  return (
    <div className=" flex flex-col items-center w-full gap-3 ">
      <div className="w-full flex flex-col gap-3 px-12 py-10 rounded-md bg-gradient-to-br from-primary via-secondary to-basic">
        <div>
          <h1 className="font-bold text-xl">패키지 추가하기</h1>
          <p>당신이 필요한 패키지를 골라주세요</p>
        </div>
        <div className="w-full flex gap-3">
          <SimpleButton color="basic">next</SimpleButton>
          <SimpleButton color="basic">eslint</SimpleButton>
          <SimpleButton color="basic">gitbook</SimpleButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
