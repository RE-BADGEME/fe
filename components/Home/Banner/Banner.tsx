import React from 'react';
import { mainText } from '@/constants/main-text';
import RoundRoutingButton from '@/components/Common/Button/RoundRoutingButton';

const Banner = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="flex flex-col items-center gap-3 ">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-lg w-full sm:text-2xl text-center font-extrabold tracking-wide">
            {mainText.banner.h1}
          </h1>
          <strong className=" text-3xl sm:text-5xl md:text-8xl lg:text-9xl text-primary drop-shadow-lg hover:text-secondary transition-all duration-1000 ease-in">
            REBADGE-ME
          </strong>
        </div>
        <div className="w-1/2">
          <p className=" text-center text-sm sm:text-lg">
            {mainText.banner.h2}
          </p>
          <div className="flex flex-col justify-center mt-48 gap-3 sm:flex-row">
            <RoundRoutingButton routingPath="dashboard/selection">
              START
            </RoundRoutingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
