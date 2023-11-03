import React from "react";

import { LinkButton, Skeleton } from "../../UI";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import cn from "../../../utils/cn";
import { otherImgsTypes } from "@/context/Data";
import { AsyncImage } from "loadable-image";

interface CategoryBannerTypes {
  categoryData: otherImgsTypes[] | null;
}

const CategoryBanner: React.FC<CategoryBannerTypes> = ({ className }) => {
  const selector = useSelector((state: RootState) => state.data);
  const skeletonLength = " ".repeat(7).split("");

  return (
    <div
      className={cn(
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
        {selector.satatus == "succeeded" ? (
          selector.categoriesData
            ?.filter((dat) => dat.category_type === "home_category")
            .sort((a, b) => a.index - b.index)
            .map((item, index) => {
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
                  <picture
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
                    {/* <LazyLoadImage
                      src={item.top_img}
                      draggable={false}
                      placeholderSrc={item.low_img}
                      loading="lazy"
                      effect="opacity"
                      alt="banner img"
                      /> */}
                    <AsyncImage
                      src={item.top_img}
                      style={{ width: 100, height: 100 }}
                      sources={[{ type: "image/png", srcSet: item.low_img }]}
                      loader={
                        <Skeleton className="h-[100px] w-[100px] rounded-full bg-[#1e242e6e]" />
                      }
                      error={
                        <Skeleton className="h-[100px] w-[100px] rounded-full bg-[#1e242e6e]" />
                      }
                    />
                  </picture>
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
            })
        ) : (
          <div
            className=" 
              jsutify-center
              grid
              grid-flow-col
              gap-x-8
            "
          >
            {skeletonLength.map((_, index) => {
              return (
                <div
                  key={index}
                  className="
                    grid
                    gap-y-[.25rem]
                  "
                >
                  <Skeleton className="h-[100px] w-[100px] rounded-full bg-[#1e242e6e]" />
                  <Skeleton className="h-[10px] w-[100px] rounded-full bg-[#1e242e6e]" />
                  <Skeleton className="h-[10px] w-[100px] rounded-full bg-[#1e242e6e]" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryBanner;
