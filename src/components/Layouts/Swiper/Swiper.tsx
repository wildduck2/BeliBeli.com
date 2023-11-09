import React, { ForwardedRef, MutableRefObject, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/store";
import { Product } from "@/context/Data";

import usePaginationDot from "../../../hooks/usePaginationDot";
import NavigationHandlerAvtive, {
  NavigationHandlerAvtiveTypes,
} from "../../../utils/NavigationHandlerAvtive/NavigationHandlerAvtive";
import CardInfo from "./CardInfo";
import {
  handleMouseDown,
  handleMouseDrag,
  handleMouseUp,
} from "@/utils/SwiperDragging";
import { Skeleton } from "@/components/UI";
import { AsyncImage } from "loadable-image";

interface SwiperTypes {
  DOT_REF?: MutableRefObject<HTMLDivElement>;
  SWIPER__REF: MutableRefObject<HTMLUListElement>;
  className?: string;
  filterSwiper?: boolean;
  DATA__NAME: Product[] | null;
  FILTER__QUERY?: string;
  MAGAZINE__TYPE?: boolean;
}

const Swiper = React.forwardRef(
  (
    {
      SWIPER__REF,
      DOT_REF,
      className,
      DATA__NAME,
      FILTER__QUERY,
      MAGAZINE__TYPE = false,
    }: SwiperTypes,
    ref: ForwardedRef<HTMLUListElement | null>,
  ) => {
    const [dragging, setDragging] = useState<boolean>(false);
    const [prevPageX, setPrevPageX] = useState<number>(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState<number>(0);
    const [positonDiff, setPositonDiff] = useState<number>(0);

    // TODO: using this hook to change dot position
    const setScrollLeft = usePaginationDot({ DOT_REF, SWIPER__REF });
    const skeletonLength = " ".repeat(4).split("");

    const selector = useSelector((state: RootState) => state.data);

    return (
      <ul
        className={`swiper_flex min-h-[483px] ${className} `}
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
        onScroll={(e) => {
          NavigationHandlerAvtive({
            e,
            setScrollLeft,
            SWIPER__REF,
          } as NavigationHandlerAvtiveTypes);
        }}
        ref={ref}
      >
        {/* TODO: make hook that gonna fetch data from supabase */}

        {selector.satatus === "succeeded" ? (
          MAGAZINE__TYPE ? (
            DATA__NAME?.map((item, index) => {
              return (
                item.type === FILTER__QUERY?.toLowerCase() &&
                item.product_type.map((data) => {
                  return (
                    <li className="swiper_card" key={index}>
                      <div className="img__wrapper">
                        <img
                          className="h-[250px] w-[250px] object-cover"
                          src={data.top_imgs["1"]}
                          alt=""
                        />
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
                      <CardInfo title={item.title} />
                    </li>
                  );
                })
              );
            })
          ) : (
            DATA__NAME?.map((item, index) => {
              return (
                item.type === FILTER__QUERY?.toLowerCase() && (
                  <li className="swiper_card" key={index}>
                    <div className="img__wrapper">
                      <AsyncImage
                        src={item.product_type[0].top_imgs["1"]}
                        style={{ width: 250, height: 350 }}
                        loader={<div style={{ background: "#1e242e6e" }} />}
                        error={<div style={{ background: "#222" }} />}
                      />
                    </div>
                    {/*card information */}
                    <CardInfo
                      choosen={item?.choosen}
                      discount={item.product_type[0].sizes[0]?.discount}
                      price={item.product_type[0].sizes[0]?.price}
                      title={item.title}
                    />
                  </li>
                )
              );
            })
          )
        ) : (
          <>
            {skeletonLength.map((_, index) => {
              return (
                <div
                  key={index}
                  className="
                    swiper_card
                    h-[435px]
                    w-[250px]
                  "
                >
                  <Skeleton className="h-[350px] w-full bg-[#1e242e6e]" />
                  <Skeleton className="h-[10px] w-full bg-[#1e242e6e]" />
                  <Skeleton className="h-[10px] w-full bg-[#1e242e6e]" />
                  <Skeleton className="h-[10px] w-full bg-[#1e242e6e]" />
                  <Skeleton className="h-[10px] w-full bg-[#1e242e6e]" />
                </div>
              );
            })}
          </>
        )}
      </ul>
    );
  },
);

Swiper.displayName = 'Swiper'
export default Swiper;

// type P<T> = Record<string, T>;
//
// const switchFn =
//   <T extends P<typeof knownFruit>>(lookupObject: T, defaultCase = "_default") =>
//   (expression: keyof T) =>
//     (lookupObject[expression] || lookupObject[defaultCase])();
//
// const knownFruit = () => console.log("Known fruit");
// const unknownFruit = () => console.log("Unknown fruit");
//
// const logFruit: P<typeof knownFruit> = {
//   apples: knownFruit,
//   oranges: knownFruit,
//   default: unknownFruit,
// };
//
// const fruitSwitch = switchFn(logFruit, "default");
//
// fruitSwitch("apples"); // Logs: 'Known fruit'
// fruitSwitch("pineapples"); // Logs: 'Unknown fruit'
