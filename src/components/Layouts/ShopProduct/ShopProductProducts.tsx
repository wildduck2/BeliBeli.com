import React, { useRef, useState } from "react";
import { AsyncImage } from "loadable-image";
import CardInfo from "../Swiper/CardInfo";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { Button, Progress, Skeleton } from "@/components/UI";
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
            return (
              index < shownCard && (
                <div className="swiper__card" key={index}>
                  <div
                    className="img__wrapper"
                    onMouseLeave={cardImgLeaveHandler}
                    onMouseOver={(e) => cardImgHoverHandler(e)}
                  >
                    {Array.from({ length: 3 }).map((_, index) => {
                      return (
                        <AsyncImage
                          key={index}
                          draggable={false}
                          src={item.product_type[0].top_imgs[index + 1]}
                          style={{ width: 269, height: 400 }}
                        />
                      );
                    })}
                    <div className="img__wrapper__overlay">
                      {Array.from({ length: 3 }).map((_, index) => {
                        return (
                          <div
                            key={index}
                            className={`dot ${index === 0 ? "active" : ""}`}
                          ></div>
                        );
                      })}
                    </div>
                  </div>

                  {/*card information */}
                  <CardInfo
                    choosen={item?.choosen}
                    discount={item.product_type[0].sizes[0]?.discount}
                    price={item.product_type[0].sizes[0]?.price}
                    title={item.title}
                  />
                </div>
              )
            );
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

let timeoutRef: NodeJS.Timeout | null = null;
const cardImgHoverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.currentTarget;
  const img = target.children[0] as HTMLDivElement;
  const dots = target?.querySelectorAll(".dot") as NodeListOf<HTMLDivElement>;
  let number = 0;

  timeoutRef = setTimeout(() => {
    dots.forEach((dot) => dot.classList.remove("active"));

    if (
      target.scrollLeft + img.clientWidth >= target.scrollWidth ||
      target.scrollLeft === img.clientWidth * 2
    ) {
      target.scrollLeft = 0;
      dots[0].classList.add("active");
    } else {
      target.scrollLeft += img.clientWidth;
      dots[number].classList.add("active");
    }

    number += 1;
  }, 1500);
};

const cardImgLeaveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
  const target = e.currentTarget;
  target.scrollLeft = 0;
  const dots = target?.querySelectorAll(".dot") as NodeListOf<HTMLDivElement>;
  clearTimeout(timeoutRef as NodeJS.Timeout);

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[0].classList.add("active");
};
