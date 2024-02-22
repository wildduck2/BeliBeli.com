import React, { MutableRefObject } from 'react'

export interface PaginationIndexTypes {
  currentTarget: HTMLButtonElement
  DOT_REF?: MutableRefObject<HTMLDivElement>
  SWIPER_REF: MutableRefObject<HTMLUListElement>
}

const PaginationIndex = ({
  currentTarget,
  DOT_REF,
  SWIPER_REF
}: PaginationIndexTypes) => {
  //  getting card width to scroll that width on nav btn click
  const cardWidth = SWIPER_REF.current.querySelector('li')!.clientWidth

  if (currentTarget.id == 'left') {
    // TODO: Swiper Scrolling
    SWIPER_REF.current.scrollLeft <= cardWidth * 1
      ? (SWIPER_REF.current.scrollLeft += cardWidth * 8)
      : (SWIPER_REF.current.scrollLeft -= cardWidth * 5)

    // TODO: Pagination DOT Active
    DOT_REF?.current.classList.toggle('active_pagination')
  } else if (currentTarget.id === 'right') {
    // TODO: Swiper Scrolling
    SWIPER_REF.current.scrollLeft >= cardWidth * 3
      ? (SWIPER_REF.current.scrollLeft -= cardWidth * 8)
      : (SWIPER_REF.current.scrollLeft += cardWidth * 4)

    // TODO: Pagination DOT Active
    DOT_REF?.current.classList.toggle('active_pagination')
  }
}

export default PaginationIndex
