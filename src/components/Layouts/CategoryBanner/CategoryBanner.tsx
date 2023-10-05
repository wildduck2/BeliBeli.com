import React from "react";

import { HomeCaregory } from "../../../constants";
import { twMerge } from "tailwind-merge";
import { LinkButton } from "../../UI";

interface CategoryBannerTypes {
  className?: string;
  categoryData: typeof HomeCaregory | null;
}

const CategoryBanner: React.FC<CategoryBannerTypes> = ({
  className,
  categoryData,
}) => {
  return (
    <div
      className={twMerge(
        `
          jsutify-center
          grid
          items-center
          gap-[1.7rem]
          pt-8
          text-center
        `,
        className,
      )}
    >
      <h1
        className="
          text-[.9rem]
          font-semibold
          lg:text-[1.1rem]
        "
      >
        Categories you might like
      </h1>

      {/* cagegories mapping */}

      <div
        className="
          jsutify-center
          grid
          grid-flow-col
          gap-x-8
        "
      >
        {categoryData?.map((item, index) => {
          return (
            <LinkButton
              key={index}
              className="
                pointer
                asdasds
                grid
                h-[147.45px]
                gap-y-[.25rem]
                text-center
                text-[.75rem]
                font-medium 
                capitalize
                lg:text-[.813rem]
              "
            >
              <div
                className="
                  img__container
                  grid
                  h-[100px]
                  w-[100px]
                  place-content-center
                  overflow-hidden
                  rounded-[50%]
                "
              >
                <img
                  className="object-cover"
                  src={item.img}
                  alt="category img"
                />
              </div>
              <span
                className="
                  grid
                  text-[.75rem]
                  font-bold
                  text-[#555555]
                "
              >
                {item.tag}
              </span>
              <h2
                className="
                  w-[93.41px]
                  flex-wrap
                  place-self-center
                  text-[.78rem]
                  font-semibold
                  leading-[.85rem]
                  text-[#222222]
                "
              >
                {item.name}
              </h2>
            </LinkButton>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBanner;
