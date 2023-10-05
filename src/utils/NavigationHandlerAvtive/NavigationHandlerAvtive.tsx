import React, { MouseEvent, MutableRefObject } from "react";

export interface NavigationHandlerAvtiveTypes {
  e: MouseEvent<HTMLUListElement>;
  SWIPER__REF: MutableRefObject<HTMLUListElement>;
  setScrollLeft: (value: number) => void;
}

const NavigationHandlerAvtive = ({
  e,
  SWIPER__REF,
  setScrollLeft,
}: NavigationHandlerAvtiveTypes) => {
  setScrollLeft(e.currentTarget.scrollLeft);
  const el = SWIPER__REF.current;

  const navigationLinks = el.parentNode!.querySelectorAll(
    ".navigation_flex",
  ) as NodeListOf<HTMLButtonElement>;

  if (el.scrollLeft < el.scrollWidth - 1200) {
    navigationLinks[1].classList.remove("last_active");
    navigationLinks[0].classList.add("both_active");
  }
  if (el.scrollWidth - 1200 <= el.scrollLeft) {
    navigationLinks[1].classList.add("last_active");
  }
  if (el.scrollLeft < 40) {
    navigationLinks[0].classList.remove("both_active");
    navigationLinks[1].classList.remove("last_active");
  }
};

export default NavigationHandlerAvtive;
