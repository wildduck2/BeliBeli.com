import React, { MutableRefObject } from "react";

import Button from "../Button";

import { arrownHeadDown, leftArrow, rightArrow } from "../../../assets";
import { twMerge } from "tailwind-merge";
import { PaginationIndexTypes } from "../../../utils/PaginationIndex/PaginationIndex";

interface NavigationTypes {
  DOT_REF?: MutableRefObject<HTMLDivElement> | undefined;
  SWIPER_REF: MutableRefObject<HTMLUListElement>;
  flex_mode?: boolean;
  btnClassName?: string;
  className?: string;
  navigationFunction: ({
    currentTarget,
    DOT_REF,
    SWIPER_REF,
  }: PaginationIndexTypes) => void;
}

const Navigation: React.FC<NavigationTypes> = ({
  DOT_REF,
  SWIPER_REF,
  flex_mode,
  className,
  btnClassName,
  navigationFunction,
}) => {
  return (
    <div
      className={twMerge(
        `
          flex
          items-center
          justify-center  
          gap-4
        `,
        className,
      )}
    >
      <Button
        className={`swiper_navigation white ${btnClassName}`}
        id="right"
        onClick={({ currentTarget }) =>
          navigationFunction({
            currentTarget,
            DOT_REF,
            SWIPER_REF,
          } as PaginationIndexTypes)
        }
      >
        {!flex_mode ? (
          <img width={25} src={leftArrow} alt="right arrow" />
        ) : (
          <img width={18} src={arrownHeadDown} alt="right arrow" />
        )}
      </Button>

      <Button
        className={`swiper_navigation ${btnClassName}`}
        id="left"
        onClick={({ currentTarget }) =>
          navigationFunction({
            currentTarget,
            DOT_REF,
            SWIPER_REF,
          } as PaginationIndexTypes)
        }
      >
        {!flex_mode ? (
          <img width={25} src={rightArrow} alt="right arrow" />
        ) : (
          <img
            className="rotate-180"
            width={18}
            src={arrownHeadDown}
            alt="right arrow"
          />
        )}
      </Button>
    </div>
  );
};

Navigation.displayName = "Navigation";

export default Navigation;
