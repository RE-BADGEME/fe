'use client';

import React, { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { RoundRoutingButtonProps } from './Button.types';

/**
 * @function RoundRoutingButton - 버튼을 누르면 라우팅되는 버튼
 * @param {string} routingPath - 라우팅 경로 (기본값: home)
 * @param {string} color - 버튼 색상 (기본값: primary)
 * @returns
 */

const RoundRoutingButton = ({
  children,
  routingPath = 'home',
  color = 'primary',
}: RoundRoutingButtonProps) => {
  const navigate = useRouter();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    navigate.push(`/${routingPath}`);
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`bg-${color} whitespace-nowrap p-2 rounded-md shadow-md`}
    >
      {children}
    </motion.button>
  );
};

export default RoundRoutingButton;
