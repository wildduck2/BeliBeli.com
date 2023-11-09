import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface SwiperDotsTypes extends React.AllHTMLAttributes<HTMLDivElement> {}

const PaginationDot = ({ className }: SwiperDotsTypes) => {
  return (
    <div
      className={twMerge(
        `
          w-[9px]
          h-[9px]
          rounded-full
          transition
      `,
        className
      )}
    ></div>
  )
}

export default PaginationDot
