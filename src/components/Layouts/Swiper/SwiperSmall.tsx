import React from 'react'

import 'swiper/css'
import 'swiper/css/pagination'

import { RootState } from '@/context/store'
import { useSelector } from 'react-redux'
import { SmallSwiperTypes } from './Swiper.types'
import { AsyncImage } from 'loadable-image'
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Skeleton
} from '@/components/UI'

const SwiperSmall = ({ DATA__NAME }: SmallSwiperTypes) => {
  const selector = useSelector((state: RootState) => state.data)

  return (
    <Carousel>
      <CarouselContent className="styledByYou__section__content__swiper">
        {selector.satatus === 'succeeded' ? (
          DATA__NAME?.map((item, index) => {
            return (
              <CarouselItem
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
              </CarouselItem>
            )
          })
        ) : (
          <>
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="swiper__card skeleton__swiper">
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </CarouselItem>
              )
            })}
          </>
        )}
      </CarouselContent>
      <CarouselPrevious variant={'ghost'} />
      <CarouselNext variant={'ghost'} />
    </Carousel>
  )
}

export default SwiperSmall
