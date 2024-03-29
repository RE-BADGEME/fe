import React from 'react';
import { mainText } from '@/constants/main-text';
import RoundRoutingButton from '@/components/Common/Button/RoundRoutingButton';

const Banner = () => {
  return (
    <div className="w-full flex justify-center items-center bg-backgroud">
      <div className="flex flex-col items-center gap-3 ">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-lg font-protest sm:text-3xl text-center">
            {mainText.banner.h1}
          </h1>
          <strong className="text-4xl font-protest sm:text-5xl text-primary drop-shadow-lg hover:text-secondary transition-all duration-1000 ease-in">
            REBADGE-ME
          </strong>
        </div>
        <div className="w-1/2">
          <p className=" text-center text-sm sm:text-base">
            {mainText.banner.h2}
          </p>
          <div className="flex flex-col justify-center mt-3 gap-3 sm:flex-row">
            <RoundRoutingButton routingPath="dashboard/selection">
              START For FREE
            </RoundRoutingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
