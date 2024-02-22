import React from 'react'

import { Swiper as SW, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import { Skeleton } from '@/components/UI'
import { RootState } from '@/context/store'
import { useSelector } from 'react-redux'
import { SwiperTypes } from './Swiper.types'

const SwiperSmall = ({ DATA__NAME }: SwiperTypes) => {
  const selector = useSelector((state: RootState) => state.data)

  return (
    <SW
      spaceBetween={20}
      slidesPerView={3}
      // slidesPerGroup={4}
      cssMode={true}
      draggable={true}
      pagination={true}
      navigation={true}
      modules={[Navigation]}
      className="styledByYou__section__content__swiper"
      loop={true}
    >
      {selector.satatus === 'succeeded' ? (
        DATA__NAME?.map((item, index) => {
          return (
            item.type === 'styledbyyou' &&
            item.product_type.map((data) => {
              return (
                <SwiperSlide
                  className="styledByYou__section__content__swiper__slide"
                  key={index}
                >
                  <div className="img__wrapper">
                    <img src={data.top_imgs['1']} alt="" />
                    {/* <LazyLoadImage
                  width={252}
                  height={252}
                  draggable={false}
                  src={data.top_imgs["1"]}
                  placeholderSrc={data.low_imgs["1"]}
                  loading="lazy"
                  effect="opacity"
                  alt="item "
                /> */}
                  </div>
                  {/*card information */}
                  {/* <CardInfo title={item.title} /> */}
                </SwiperSlide>
              )
            })
          )
        })
      ) : (
        <>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <SwiperSlide
                key={index}
                className="swiper__card skeleton__swiper"
              >
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </SwiperSlide>
            )
          })}
        </>
      )}
    </SW>
  )
}

export default SwiperSmall
