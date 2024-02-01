import React from "react";
import { useShopProductData } from "@/hooks";
import { useMatch } from "react-router-dom";

const ShopProduct = () => {
  const match = useMatch("/produc-show/:id");

  const data = useShopProductData({
    id: match?.params.id,
  });

  return (
    <>
      {/* <main className="category-page">
        <span>{routeText}</span>

        <div className="category-page__wrapper">
          <div className="category-page__wrapper__sidebar">
            {<NavigationHeaderLooping headerNavigationData={navigationLink} />}
          </div>

          <div className="category-page__wrapper__content">
            <h1>{pageTile}</h1>
          </div>
        </div>
      </main> */}
    </>
  );
};

export default ShopProduct;
