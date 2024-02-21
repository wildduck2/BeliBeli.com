import React from 'react';
import { Swiper as SW, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { useSelector } from 'react-redux';
import { RootState } from '@/context/store';
import { Navigation, Pagination } from 'swiper/modules';
import { Skeleton, SwiperCard } from '@/components/UI';
import { SwiperTypes } from './Swiper.types';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/context/Data.types';

const Swiper = ({ DATA__NAME, FILTER__QUERY }: SwiperTypes) => {
  const selector = useSelector((state: RootState) => state.data);
  const route = useNavigate();

  return (
    <SW
      spaceBetween={25}
      // slidesPerView={4}
      // slidesPerGroup={4}
      // cssMode={true}
      // navigation={true}
      // pagination={true}
      // modules={[Navigation, Pagination]}
      className="trending__section__swiper"
      loop={true}
    >
      {selector.satatus === 'succeeded' ? (
        DATA__NAME?.map((item: Product, index) => {
          return (
            item.type === FILTER__QUERY?.toLowerCase() && (
              <SwiperSlide
                key={index}
                onClick={() => {
                  window.scrollTo(0, 0);
                  route(`/product-show/${item.title}`, {
                    state: item
                  });
                }}
              >
                <SwiperCard item={item} key={index} width={245} height={350} />
              </SwiperSlide>
            )
          );
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
            );
          })}
        </>
      )}
    </SW>
  );
};

Swiper.displayName = 'Swiper';
export default Swiper;
