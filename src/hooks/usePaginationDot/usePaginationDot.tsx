import React, { MutableRefObject, useEffect, useState, UIEvent } from 'react'

interface usePaginationDotTypes {
  DOT_REF: MutableRefObject<HTMLDivElement> | undefined
  SWIPER__REF: MutableRefObject<HTMLUListElement>
}

const usePaginationDot = ({ DOT_REF, SWIPER__REF }: usePaginationDotTypes) => {
  const [scrollLeft, setScrollLeft] = useState<number>(0)

  useEffect(() => {
    if (DOT_REF) {
      SWIPER__REF.current.scrollLeft > 500
        ? DOT_REF.current.classList.add('active_pagination')
        : DOT_REF.current.classList.remove('active_pagination')
    }
  }, [scrollLeft])

  return setScrollLeft
}

export default usePaginationDot
