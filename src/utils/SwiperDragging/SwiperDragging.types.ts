import React from 'react'
export interface handleMouseDownTypes {
  e: React.MouseEvent<HTMLUListElement>
  setDragging?: (dragging: boolean) => void
  setPrevScrollLeft?: (scrollLeft: number) => void
  setPrevPageX?: (pageX: number) => void
  SWIPER__REF: React.MutableRefObject<HTMLUListElement>
}

export interface handleMouseDragTypes extends handleMouseDownTypes {
  dragging?: boolean
  prevPageX?: number
  prevScrollLeft?: number
  positonDiff?: number
  setPositonDiff?: (scrollLeft: number) => void
}

export interface handleMouseUpTypes {
  setDragging: (dragging: boolean) => void
}
