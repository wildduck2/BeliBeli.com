import React from "react";

import { Link, Skeleton } from "../../UI";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { otherImgsTypes } from "@/context/Data";
import { AsyncImage } from "loadable-image";

interface CategoryBannerTypes {
  categoryData: otherImgsTypes[] | null;
}

const CategoryBanner: React.FC<CategoryBannerTypes> = () => {
  const selector = useSelector((state: RootState) => state.data);
  const skeletonLength = " ".repeat(8).split("");

  return (
    <div className="category-banner">
      <h1>Categories you might like</h1>

      {/* cagegories mapping */}
      <div className="category-banner__wrapper">
        {selector.satatus === "succeeded" ? (
          selector.categoriesData
            ?.filter((dat) => dat.category_type === "home_category")
            .sort((a, b) => a.index - b.index)
            .map((item, index) => {
              return (
                <Link key={index} className="category-banner__bit">
                  <picture>
                    <AsyncImage
                      src={item.top_img}
                      style={{ width: 65, height: 65 }}
                      sources={[{ type: "image/png", srcSet: item.low_img }]}
                      loader={<div className="skeleton r-full" />}
                      error={<div className="skeleton r-full" />}
                    />
                  </picture>
                  <span>{item.tag}</span>
                  <h2>{item.name}</h2>
                </Link>
              );
            })
        ) : (
          <div className="category__skeleton">
            {skeletonLength.map((_, index) => {
              return (
                <div key={index}>
                  <Skeleton className="skeleton" />
                  <Skeleton className="skeleton sm" />
                  <Skeleton className="skeleton sm" />
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
