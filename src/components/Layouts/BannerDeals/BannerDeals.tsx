import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { Link } from '@/components/UI'
import { Daels } from '@/constants'
import 'swiper/scss'

const BannerDeals = (): React.JSX.Element => {
  return (
    <div className="banner-deals">
      {Daels.map((item) => {
        return (
          <Link key={item} className="banner-deals__link">
            {item}
          </Link>
        )
      })}
    </div>
  )
}

export default BannerDeals
