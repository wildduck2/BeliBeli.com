import React from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import { useSelector } from 'react-redux'
import { RootState } from '@/context/store'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Skeleton,
  SwiperCard
} from '@/components/UI'
import { SwiperTypes } from './Swiper.types'
import { Product } from '@/context/Data/Data.types'

const Swiper = ({ DATA__NAME, FILTER__QUERY }: SwiperTypes) => {
  const selector = useSelector((state: RootState) => state.data)

  return (
    <Carousel>
      <CarouselContent className="trending__section__swiper">
        {selector.satatus === 'succeeded' ? (
          DATA__NAME?.map((item: Product, index) => {
            return (
              item.type === FILTER__QUERY?.toLowerCase() && (
                <>
                  <CarouselItem key={index}>
                    <SwiperCard
                      item={item}
                      key={index}
                      width={245}
                      height={350}
                    />
                  </CarouselItem>
                  <CarouselItem key={index}>
                    <SwiperCard
                      item={item}
                      key={index}
                      width={245}
                      height={350}
                    />
                  </CarouselItem>
                  <CarouselItem key={index}>
                    <SwiperCard
                      item={item}
                      key={index}
                      width={245}
                      height={350}
                    />
                  </CarouselItem>
                  <CarouselItem key={index}>
                    <SwiperCard
                      item={item}
                      key={index}
                      width={245}
                      height={350}
                    />
                  </CarouselItem>
                  <CarouselItem key={index}>
                    <SwiperCard
                      item={item}
                      key={index}
                      width={245}
                      height={350}
                    />
                  </CarouselItem>
                  <CarouselItem key={index}>
                    <SwiperCard
                      item={item}
                      key={index}
                      width={245}
                      height={350}
                    />
                  </CarouselItem>
                  <CarouselItem key={index}>
                    <SwiperCard
                      item={item}
                      key={index}
                      width={245}
                      height={350}
                    />
                  </CarouselItem>
                </>
              )
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

Swiper.displayName = 'Swiper'
export default Swiper
