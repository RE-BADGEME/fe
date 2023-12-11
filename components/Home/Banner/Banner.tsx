import React from 'react';
import { mainText } from '@/constants/main-text';
import RoundRoutingButton from '@/components/Common/Button/RoundRoutingButton';

const Banner = () => {
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <div className="flex flex-col items-center gap-3 ">
        <div className="flex flex-col items-center gap-2">
          <h1 className=" text-3xl text-center font-extrabold">
            {mainText.banner.h1}
          </h1>
          <strong className="text-5xl text-primary">REBADGE-ME</strong>
        </div>
        <div className="w-1/2">
          <p className=" text-center">{mainText.banner.h2}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <RoundRoutingButton routingPath="dashboard/selection">
              라이브러리 구성
            </RoundRoutingButton>
            <RoundRoutingButton routingPath="dashboard/result" color="black">
              Package.json 분석
            </RoundRoutingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
