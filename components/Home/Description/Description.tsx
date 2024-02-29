import React from 'react';
import DescriptionBanner from '../Banner/DescriptionBanner';
import { ItemsView } from '@/constants/image-banner';
import ImageCard, { ImageCardProps } from '@/components/Common/Card/ImageCard';
import TextCard from '@/components/Common/Card/TextCard';
import { readMeBannerConstants } from '@/constants/readme-banner';

const Description = () => {
  return (
    <section className="w-full flex flex-col items-center gap-4">
      <DescriptionBanner title={'How To Use REBADGE-ME'}>
        <div className="w-full overflow-x-scroll md:overflow-auto flex gap-3 mt-5 pb-3">
          {ItemsView.map((item: ImageCardProps) => (
            <ImageCard
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </DescriptionBanner>
      <DescriptionBanner title={'Why You Should write ReadMe'}>
        <div className="w-full flex flex-col mt-4 gap-5 md:gap-3">
          {readMeBannerConstants.map(
            (item: { id: number; title: string; description: string }) => (
              <TextCard
                reverse={item.id % 2 === 1}
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ),
          )}
        </div>
      </DescriptionBanner>
    </section>
  );
};

export default Description;
