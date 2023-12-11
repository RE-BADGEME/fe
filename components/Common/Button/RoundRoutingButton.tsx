'use client';

import React, { MouseEventHandler } from 'react';
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
    <button
      type="button"
      onClick={handleClick}
      className={`bg-${color} whitespace-nowrap`}
    >
      {children}
    </button>
  );
};

export default RoundRoutingButton;
