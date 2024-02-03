import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { Button, Progress, Skeleton, SwiperCard } from "@/components/UI";
import { ShowProductProductsProps } from "./ShopProduct.types";

const ShopProductProducts: React.FC<ShowProductProductsProps> = ({
  status,
}) => {
  const satatus = useSelector((state: RootState) => state.data.satatus);
  const products = useSelector((state: RootState) => state.data.products);
  const [shownCard, setShownCard] = useState<number>(10);

  const handleShowMore = () => {
    if (products) {
      setShownCard((prev) =>
        prev + 10 < products?.length ? prev + 10 : products?.length,
      );
    }
  };

  return (
    <>
      <div className="products-shop__wrapper__content__products">
        {status && satatus === "succeeded" ? (
          products?.map((item, index) => {
            return index < shownCard && <SwiperCard item={item} key={index} />;
          })
        ) : (
          <>
            {Array.from({ length: shownCard }).map((_, index) => {
              return (
                <div key={index} className="swiper__card skeleton__swiper">
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="products-shop__wrapper__content__load">
        <span>
          Showing {shownCard} from {products ? products!.length : 20} item
        </span>

        <Progress
          value={products ? (shownCard / products!.length) * 100 : 10}
          className="progress"
        />

        {products && products?.length > shownCard && (
          <Button onClick={handleShowMore}>Load more products</Button>
        )}
        <p>
          Find your decorative glassware needs in H&M Home. From vases and soap
          dispensers to jugs and jars, we offer many different designs to add a
          little shine your home.
        </p>
      </div>
    </>
  );
};

export default ShopProductProducts;
