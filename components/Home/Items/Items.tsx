'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

const Items = React.memo(
  ({
    view,
    index,
    image,
  }: {
    view: boolean[];
    index: number;
    image: StaticImageData;
  }) => {
    return (
      <motion.div
        layout
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
        }}
        className={`w-full h-full transition-colors duration-1000 ease-linear ${
          view[index] ? 'col-span-5 bg-primary' : 'col-span-1 '
        }`}
      >
        {view[index] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: 'easeInOut',
              delay: 1.5,
            }}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            <Image
              src={image}
              alt="image"
              className="w-full h-96 object-cover object-bottom"
            />
          </motion.div>
        )}
      </motion.div>
    );
  },
);

export default Items;
