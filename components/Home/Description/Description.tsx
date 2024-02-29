import React from 'react';
import DescriptionBanner from '../Banner/DescriptionBanner';
import { ItemsView } from '@/constants/image-banner';
import ImageCard, { ImageCardProps } from '@/components/Common/Card/ImageCard';

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
        <div>안녕</div>
      </DescriptionBanner>
    </section>
  );
};

export default Description;
