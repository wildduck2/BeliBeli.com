import React, { MouseEvent, MutableRefObject } from "react";

interface handleMouseDownTypes {
  e: MouseEvent<HTMLUListElement>;
  setDragging?: (dragging: boolean) => void;
  setPrevScrollLeft?: (scrollLeft: number) => void;
  setPrevPageX?: (pageX: number) => void;
  SWIPER__REF: MutableRefObject<HTMLUListElement>;
}

interface handleMouseDragTypes extends handleMouseDownTypes {
  dragging?: boolean;
  prevPageX?: number;
  prevScrollLeft?: number;
  positonDiff?: number;
  setPositonDiff?: (scrollLeft: number) => void;
}

interface handleMouseUpTypes {
  setDragging: (dragging: boolean) => void;
}

export const handleMouseDown = ({
  e,
  setDragging,
  setPrevPageX,
  setPrevScrollLeft,
  SWIPER__REF,
}: handleMouseDownTypes) => {
  setDragging!(true);
  setPrevPageX!(e!.pageX);
  setPrevScrollLeft!(SWIPER__REF!.current.scrollLeft);
};

export const handleMouseDrag = ({
  e,
  dragging,
  prevPageX,
  prevScrollLeft,
  positonDiff,
  SWIPER__REF,
  setPositonDiff,
}: handleMouseDragTypes) => {
  if (dragging) {
    e!.preventDefault();
    setPositonDiff!(e!.pageX - prevPageX!);
    SWIPER__REF!.current.scrollLeft = prevScrollLeft! - positonDiff!;
  }
};

export const handleMouseUp = ({ setDragging }: handleMouseUpTypes) => {
  setDragging!(false);
};
