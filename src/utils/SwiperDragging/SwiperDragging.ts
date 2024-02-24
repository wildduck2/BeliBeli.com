import {
  handleMouseDownTypes,
  handleMouseDragTypes,
  handleMouseUpTypes
} from './SwiperDragging.types'

export const handleMouseDown = ({
  e,
  setDragging,
  setPrevPageX,
  setPrevScrollLeft,
  SWIPER__REF
}: handleMouseDownTypes) => {
  setDragging!(true)
  setPrevPageX!(e!.pageX)
  setPrevScrollLeft!(SWIPER__REF!.current.scrollLeft)
}

export const handleMouseDrag = ({
  e,
  dragging,
  prevPageX,
  prevScrollLeft,
  positonDiff,
  SWIPER__REF,
  setPositonDiff
}: handleMouseDragTypes) => {
  if (dragging) {
    e!.preventDefault()
    setPositonDiff!(e!.pageX - prevPageX!)
    SWIPER__REF!.current.scrollLeft = prevScrollLeft! - positonDiff!
  }
}

export const handleMouseUp = ({ setDragging }: handleMouseUpTypes) => {
  setDragging!(false)
}
