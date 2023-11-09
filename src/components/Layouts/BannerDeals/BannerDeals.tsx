import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { LinkButton } from "@/components/UI";
import { Daels } from "@/constants";
import "swiper/scss";

const BannerDeals = () => {
  return (
    <Swiper
      className="banner-deals"
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      breakpoints={{
        280: {
          slidesPerView: 1,
          spaceBetween: 50,
        },

        700: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        800: {
          slidesPerView: 2,
          spaceBetween: 90
        },


        1024: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      }}
    >
      {Daels.map((item, key) => {
        return (
          <SwiperSlide key={key}>
            <LinkButton
              className="banner-deals__link
                  pb-[.2rem]
                "
            >
              {item}
            </LinkButton>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BannerDeals;
