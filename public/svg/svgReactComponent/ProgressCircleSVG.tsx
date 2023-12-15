'use client'

import React from 'react'
import { MotionValue, motion } from 'framer-motion'

const ProgressCircleSVG = ({progress} : {
  progress: MotionValue<number>
}) => {

  return (
    <svg id="progress" width="50" height="50" viewBox="0 0 100 100" className='fill-none absolute right-12'>
      <circle cx="50" cy="50" r="30" pathLength="1" className=" stroke-basic stroke-[3px]" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="stroke-orange-900 stroke-[3px]"
          style={{ pathLength: progress }}
        />
    </svg>
  )
}

export default ProgressCircleSVG