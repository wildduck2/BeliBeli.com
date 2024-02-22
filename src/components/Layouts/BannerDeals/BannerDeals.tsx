import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { Link } from '@/components/UI'
import { Daels } from '@/constants'
import 'swiper/scss'

const BannerDeals = () => {
  return (
    <Swiper
      className="banner-deals"
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      modules={[Autoplay]}
      breakpoints={{
        280: {
          slidesPerView: 1,
          spaceBetween: 50
        },

        700: {
          slidesPerView: 2,
          spaceBetween: 20
        },

        800: {
          slidesPerView: 2,
          spaceBetween: 90
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }}
    >
      {Daels.map((item, key) => {
        return (
          <SwiperSlide key={key}>
            <Link className="banner-deals__link">{item}</Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default BannerDeals
