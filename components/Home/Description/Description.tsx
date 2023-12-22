'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ItemsView } from './constants';
import Items from '../Items/Items';

const Description = () => {
  const [view, setView] = useState([false, false, true]);

  useEffect(() => {
    const timer = setInterval(() => {
      setView((prev) => [...prev.slice(1), prev[0]]);
    }, 1000 * 15);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      layout
      layoutRoot
      className="grid grid-cols-7 w-4/5 h-fit bg-gradient-to-r from-gray-50 via-gray-400 to-gray-50"
    >
      <AnimatePresence initial={false}>
        {ItemsView.map((item, index) => (
          <Items
            key={item.id}
            view={view}
            index={2 - index}
            image={item.image}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Description;
