import React from "react";
import CardInfo from "@/components/Layouts/Swiper/CardInfo";
import { AsyncImage } from "loadable-image";
import { SwiperCardProps } from "./SwiperCard.types";
import { cardImgHoverHandler, cardImgLeaveHandler } from "@/utils";

const SwiperCard: React.FC<SwiperCardProps> = ({ item }) => {
  return (
    <div className="swiper__card">
      <div
        className="img__wrapper"
        onMouseLeave={cardImgLeaveHandler}
        onMouseOver={(e) => cardImgHoverHandler(e)}
      >
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <AsyncImage
              key={index}
              draggable={false}
              src={item.product_type[0].top_imgs[index + 1]}
              style={{ width: 269, height: 400 }}
            />
          );
        })}
        <div className="img__wrapper__overlay">
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <div
                key={index}
                className={`dot ${index === 0 ? "active" : ""}`}
              ></div>
            );
          })}
        </div>
      </div>

      {/*card information */}
      <CardInfo
        choosen={item?.choosen}
        discount={item.product_type[0].sizes[0]?.discount}
        price={item.product_type[0].sizes[0]?.price}
        title={item.title}
      />
    </div>
  );
};

export default SwiperCard;
