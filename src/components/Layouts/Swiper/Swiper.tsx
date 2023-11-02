import React, { ForwardedRef, MutableRefObject, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/store";

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

interface SwiperTypes {
  DOT_REF?: MutableRefObject<HTMLDivElement>;
  SWIPER__REF: MutableRefObject<HTMLUListElement>;
  className?: string;
  filterSwiper?: boolean;
}

const Swiper = React.forwardRef(
  (
    { SWIPER__REF, DOT_REF, className }: SwiperTypes,
    ref: ForwardedRef<HTMLUListElement | null>,
  ) => {
    const [dragging, setDragging] = useState<boolean>(false);
    const [prevPageX, setPrevPageX] = useState<number>(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState<number>(0);
    const [positonDiff, setPositonDiff] = useState<number>(0);

    // TODO: using this hook to change dot position
    const setScrollLeft = usePaginationDot({ DOT_REF, SWIPER__REF });
    const store = useSelector((state: RootState) => state.data);

    const selector = useSelector((state: RootState) => state.data);

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
        // onScroll={(e) =>
        //   NavigationHandlerAvtive({
        //     e,
        //     setScrollLeft,
        //     SWIPER__REF,
        //   } as NavigationHandlerAvtiveTypes)
        // }
        ref={ref}
      >
        {/* TODO: make hook that gonna fetch data from supabase */}

        {selector.satatus === "succeeded" ? (
          selector.products?.map((item, index) => {
            return (
              item.type === store.currentFilter.toLowerCase() && (
                <li className="swiper_card" key={index}>
                  <div className="img__wrapper">
                    <LazyLoadImage
                      className="h-[350px] w-[250px] object-fill"
                      width={250}
                      height={345}
                      draggable={false}
                      src={item.product_type[0].top_imgs["1"]}
                      placeholderSrc={item.product_type[0].low_imgs["1"]}
                      loading="lazy"
                      effect="opacity"
                      alt="item "
                    />
                  </div>
                  {/*card information */}
                  <CardInfo
                    choosen={item.choosen}
                    discount={item.product_type[0].sizes[0].discount}
                    price={item.product_type[0].sizes[0].price}
                    title={item.title}
                  />
                </li>
              )
            );
          })
        ) : (
          <Skeleton className="h-[350px] w-[250px] bg-[#1e242e6e]" />
        )}
      </ul>
    );
  },
);
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
