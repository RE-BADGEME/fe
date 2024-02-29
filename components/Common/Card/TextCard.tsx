'use client';

import React from 'react';
import { useInView, animated } from '@react-spring/web';

const TextCard = ({
  title,
  description,
  reverse = false,
}: {
  title: string;
  description: string;
  reverse: boolean;
}) => {
  const [ref, inView] = useInView(
    () => ({
      from: {
        opacity: 0,
        transform: 'translateY(50px)',
      },
      to: { opacity: 1, transform: 'translateY(0px)' },
    }),
    {
      once: true,
    },
  );

  const [pAnimRef, pAnim] = useInView(
    () => ({
      from: {
        opacity: 0,
        transform: 'translateY(200px)',
      },
      to: { opacity: 1, transform: 'translateY(0px)' },
    }),
    { once: true },
  );

  return (
    <div className={`w-full flex ${reverse && 'flex-row-reverse'}`}>
      <div className={`w-4/5 md:w-1/2 ${reverse && 'text-end'}`}>
        <animated.h1
          ref={ref}
          style={inView}
          className="text-lg md:text-3xl text-primary font-protest"
        >
          {title}
        </animated.h1>
        <animated.p
          ref={pAnimRef}
          style={pAnim}
          className="text-base md:text-xl"
        >
          {description}
        </animated.p>
      </div>
    </div>
  );
};

export default TextCard;
