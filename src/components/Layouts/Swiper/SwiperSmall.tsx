import React from 'react'

import { Swiper as SW, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import { Button, Skeleton } from '@/components/UI'
import { RootState } from '@/context/store'
import { useSelector } from 'react-redux'
import { SmallSwiperTypes } from './Swiper.types'
import { AsyncImage } from 'loadable-image'

const SwiperSmall = ({ DATA__NAME }: SmallSwiperTypes) => {
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
      loop={true}>
      {selector.satatus === 'succeeded' ? (
        DATA__NAME?.map((item, index) => {
          return (
            <SwiperSlide
              className="styledByYou__section__content__swiper__slide"
              key={index}>
              <div className="img__wrapper">
                <AsyncImage
                  draggable={false}
                  src={item.img}
                  style={{ width: 252, height: 252 }}
                  loading="lazy"
                  alt="item "
                />
              </div>
              {/*card information */}
              <div className="card__info">
                <Button variant={'link'}>@{item.name}</Button>
              </div>
            </SwiperSlide>
          )
        })
      ) : (
        <>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <SwiperSlide
                key={index}
                className="swiper__card skeleton__swiper">
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
