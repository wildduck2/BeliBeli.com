import React from "react";
import { Swiper as SW, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Product } from "@/context/Data";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { Navigation, Pagination } from "swiper/modules";
import { AsyncImage } from "loadable-image";
import CardInfo from "./CardInfo";
import { Skeleton } from "@/components/UI";

export interface SwiperTypes {
    DATA__NAME: Product[] | null;
    FILTER__QUERY?: string;
}

const Swiper = ({ DATA__NAME, FILTER__QUERY }: SwiperTypes) => {
    const selector = useSelector((state: RootState) => state.data);

    return (
        <SW
            spaceBetween={25}
            slidesPerView={4}
            // slidesPerGroup={4}
            cssMode={true}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="trending__section__swiper"
            loop={true}
        >
            {selector.satatus === "succeeded" ? (
                DATA__NAME?.map((item, index) => {
                    return (
                        item.type === FILTER__QUERY?.toLowerCase() && (
                            <SwiperSlide className="swiper__card" key={index}>
                                <div className="img__wrapper">
                                    <AsyncImage
                                        src={item.product_type[0].top_imgs["1"]}
                                        style={{ width: 254, height: 350 }}
                                        loader={
                                            <div style={{ background: "#1e242e6e", opacity: 0.2 }} />
                                        }
                                        error={
                                            <div
                                                style={{
                                                    background: "hsl(356, 100%, 45%)",
                                                    opacity: 0.2,
                                                }}
                                            />
                                        }
                                    />
                                </div>
                                {/*card information */}
                                <CardInfo
                                    choosen={item?.choosen}
                                    discount={item.product_type[0].sizes[0]?.discount}
                                    price={item.product_type[0].sizes[0]?.price}
                                    title={item.title}
                                />
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

Swiper.displayName = "Swiper";
export default Swiper;
