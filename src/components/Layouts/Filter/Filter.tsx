import React, { MouseEvent, useRef } from "react";
import { FilterLinks } from "../../../constants";
import Button from "../../UI/Button";
import { twMerge } from "tailwind-merge";
import { useDispatch } from "react-redux";
import { gettingFilterName } from "../../../context/Utils";

const Filter = () => {
  const ButtonsContainerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const filterButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const el = e.currentTarget;

    const buttons = ButtonsContainerRef.current!
      .childNodes as NodeListOf<HTMLButtonElement>;

    buttons.forEach((button) => {
      button.classList.remove("active_filter");
    });

    el.classList.add("active_filter");

    // TODO: passing the filter name to redux to use it in the swiper
    dispatch(gettingFilterName(el.innerHTML.split(" ").join("")));
  };

  return (
    <div ref={ButtonsContainerRef} className="filter">
      {FilterLinks.map((data, index) => {
        return (
          <Button
            key={index}
            type="button"
            onClick={filterButtonHandler}
            className={twMerge(
              `
                rounded_button
                ${index === 0 && "active_filter"}
              `,
            )}
          >
            {data}
          </Button>
        );
      })}
    </div>
  );
};

export default Filter;
