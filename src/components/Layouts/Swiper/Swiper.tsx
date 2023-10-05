import React, { ForwardedRef, MutableRefObject, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import CardInfo from "./CardInfo";

import { useSelector } from "react-redux";
import {
  handleMouseDown,
  handleMouseDrag,
  handleMouseUp,
} from "../../../utils/SwiperDragging";
import usePaginationDot from "../../../hooks/usePaginationDot";
import useFetch from "../../../hooks/useFetch";
import { RootState } from "../../../context/store";
import NavigationHandlerAvtive, {
  NavigationHandlerAvtiveTypes,
} from "../../../utils/NavigationHandlerAvtive/NavigationHandlerAvtive";

interface SwiperTypes {
  DOT_REF?: MutableRefObject<HTMLDivElement>;
  SWIPER__REF: MutableRefObject<HTMLUListElement>;
  filterSwiper?: boolean;
  fetchFileName?: string;
  className?: string;
  imgHeight?: number;
}

const Swiper = React.forwardRef(
  (
    {
      SWIPER__REF,
      DOT_REF,
      filterSwiper,
      fetchFileName,
      className,
      imgHeight,
    }: SwiperTypes,
    ref: ForwardedRef<HTMLUListElement | null>,
  ) => {
    const [dragging, setDragging] = useState<boolean>(false);
    const [prevPageX, setPrevPageX] = useState<number>(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState<number>(0);
    const [positonDiff, setPositonDiff] = useState<number>(0);

    // TODO: using this hook to change dot position
    const setScrollLeft = usePaginationDot({ DOT_REF, SWIPER__REF });
    const store = useSelector((state: RootState) => state.data);

    // TODO: use fetch hook to get the data to iterate
    const fetchedData = useFetch(
      filterSwiper ? store.currentFilter : fetchFileName!,
    );

    // const fetchedData = useFetch(
    //   filterSwiper
    //     ? `/src/json/trendingNow/${store.currentFilter}.json`
    //     : fetchFileName!,
    // );

    return (
      <ul
        className={`swiper_flex ${className}`}
        onMouseDown={(e) =>
          handleMouseDown({
            e,
            setDragging,
            setPrevPageX,
            setPrevScrollLeft,
            SWIPER__REF,
          })
        }
        onMouseMove={(e) =>
          handleMouseDrag({
            e,
            dragging,
            prevPageX,
            prevScrollLeft,
            positonDiff,
            SWIPER__REF,
            setPositonDiff,
          })
        }
        onMouseUp={() => handleMouseUp({ setDragging })}
        onScroll={(e) =>
          NavigationHandlerAvtive({
            e,
            setScrollLeft,
            SWIPER__REF,
          } as NavigationHandlerAvtiveTypes)
        }
        ref={ref}
      >
        {/* TODO: make hook that gonna fetch data from supabase */}
        {fetchedData?.map((data, index) => {
          return (
            <li className="swiper_card" key={index}>
              <div className="img__wrapper">
                <LazyLoadImage
                  className="object-cover"
                  width={"100%"}
                  height={imgHeight}
                  draggable={false}
                  src={data.img1.original}
                  placeholderSrc={data.img1.lowReseloution}
                  loading="lazy"
                  effect="opacity"
                  alt="item img"
                />
              </div>
              {/* card information */}
              <CardInfo
                choosen={data.choosed!}
                discount={data.discount}
                price={data.price}
                title={data.title}
              />
            </li>
          );
        })}
      </ul>
    );
  },
);
export default Swiper;
