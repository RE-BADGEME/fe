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
      className="grid grid-cols-7 w-4/5 h-96 bg-gradient-to-r from-basic via-primary to-basic"
    >
      <AnimatePresence initial={false}>
        {ItemsView.map((item, index) => (
          <Items key={item.id} view={view} index={2 - index} text={item.text} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Description;
