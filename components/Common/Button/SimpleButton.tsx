'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SimpleButtonProps } from './Button.types';

/**
 * @function RoundRoutingButton - 버튼을 누르면 라우팅되는 버튼
 * @param {string} routingPath - 라우팅 경로 (기본값: home)
 * @param {string} color - 버튼 색상 (기본값: primary)
 * @returns
 */

const SimpleButton = ({ children, color = 'primary' }: SimpleButtonProps) => {
  const backgroundColor = `bg-${color}`;

  return (
    <motion.button
      type="button"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`${backgroundColor} whitespace-nowrap p-2 rounded-md animate-none hover:animate-pulse shadow-lg`}
    >
      {children}
    </motion.button>
  );
};

export default SimpleButton;
