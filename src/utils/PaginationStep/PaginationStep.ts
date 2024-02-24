import { navigationToRightAndLeftHandlerTypes } from './PaginationStep.types'

const PaginationStep = ({
  currentTarget,
  SWIPER_REF
}: navigationToRightAndLeftHandlerTypes) => {
  const el = SWIPER_REF.current

  //  getting card width to scroll that width on nav btn click
  const cardWidth = el.querySelector('li')!.offsetWidth

  if (currentTarget.id === 'left') {
    if (el.scrollLeft < el.scrollWidth - 1200) {
      el.scrollLeft += cardWidth + 48
    }
  } else if (currentTarget.id === 'right') {
    el.scrollLeft -= cardWidth + 48
  }
}

export default PaginationStep
