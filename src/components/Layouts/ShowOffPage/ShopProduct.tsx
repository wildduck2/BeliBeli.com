import { NavigationHeaderLooping } from "@/utils";
import React from "react";
import { ShowProductTypes } from "./ShopProduct.types";

const ShopProduct: React.FC<ShowProductTypes> = ({
  pageTile,
  navigationLink,
  routeText,
}) => {
  return (
    <>
      <main className="category-page">
        <span>{routeText}</span>

        <div className="category-page__wrapper">
          <div className="category-page__wrapper__sidebar">
            {<NavigationHeaderLooping headerNavigationData={navigationLink} />}
          </div>

          <div className="category-page__wrapper__content">
            <h1>{pageTile}</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShopProduct;
