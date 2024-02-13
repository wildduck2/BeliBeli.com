import React, { useRef } from "react";
import { frame } from "@/assets";
import { Button, RatingStars, ShareProductWrapper } from "@/components/UI";
import { Product } from "@/context/Data.types";
import { Heart, Package } from "lucide-react";
import { AiOutlineShopping } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { TbShare3 } from "react-icons/tb";
import { AsyncImage as LazyImg } from "@/components/Layouts";
import { GoPackageDependents } from "react-icons/go";

const height = 883.567;

const ProductShow = () => {
  // const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentTypeIndex, setCurrentTypeIndex] = React.useState<number>(0);
  const [currentSizeIndex, setCurrentSizeIndex] = React.useState<number>(0);
  const mainImgsRef = useRef<HTMLDivElement>(null);

  const { state } = useLocation();
  const product: Product = state;

  return (
    <>
      <main className="products-show">
        <span>{`Home / Sale / ${product.type} / ${product.product_category} / ${product.title}`}</span>

        <div className="products-show__wrapper">
          <div className="products-show__wrapper__main">
            <div
              className="products-show__wrapper__main__imgs"
              ref={mainImgsRef}
            >
              <LazyImg
                src={product.product_type[currentTypeIndex].top_imgs[0]}
                srcSet={product.product_type[currentTypeIndex].low_imgs[0]}
                alt={product.title}
                style={{ width: "100%", height: height }}
                draggable={false}
              />
              <LazyImg
                src={product.product_type[currentTypeIndex].top_imgs[1]}
                srcSet={product.product_type[currentTypeIndex].low_imgs[1]}
                alt={product.title}
                style={{ width: "100%", height: height }}
                draggable={false}
              />

              <div className="products-show__wrapper__main__imgs__info">
                <p>{product.description}</p>

                <div>
                  <span>FIT:</span>
                  <span>{product.fit}</span>
                </div>

                <div>
                  <span>Art. No.:</span>
                  <span>{product.product_type[currentTypeIndex].art_no}</span>
                </div>

                <Button variant={"link"}>DETAILS</Button>
              </div>

              <LazyImg
                src={product.product_type[currentTypeIndex].top_imgs[2]}
                srcSet={product.product_type[currentTypeIndex].low_imgs[2]}
                alt={product.title}
                style={{ width: "100%", height: height }}
                draggable={false}
              />
              <LazyImg
                src={product.product_type[currentTypeIndex].top_imgs[3]}
                srcSet={product.product_type[currentTypeIndex].low_imgs[3]}
                alt={product.title}
                style={{ width: "100%", height: height }}
                draggable={false}
              />
              <LazyImg
                src={product.product_type[currentTypeIndex].top_imgs[4]}
                srcSet={product.product_type[currentTypeIndex].low_imgs[4]}
                alt={product.title}
                style={{ width: "100%", height: height }}
                draggable={false}
              />
              <LazyImg
                src={product.product_type[currentTypeIndex].top_imgs[5]}
                srcSet={product.product_type[currentTypeIndex].low_imgs[5]}
                alt={product.title}
                style={{ width: "100%", height: height }}
                draggable={false}
              />
            </div>

            <div className="products-show__wrapper__main__info">
              <h1>{product.title}</h1>

              <div className="products-show__wrapper__main__info__prize">
                <div>
                  <h2>
                    EGP{" "}
                    {
                      product.product_type[currentTypeIndex].sizes[
                        currentSizeIndex
                      ].price
                    }
                  </h2>
                  {product.product_type[currentTypeIndex].sizes[
                    currentSizeIndex
                  ].discount && (
                    <>
                      <h2>
                        EGP{" "}
                        {
                          product.product_type[currentTypeIndex].sizes[
                            currentSizeIndex
                          ].discount
                        }
                      </h2>
                      <span>
                        (save{" "}
                        {`${(
                          (parseInt(
                            product.product_type[currentTypeIndex].sizes[
                              currentSizeIndex
                            ].discount!,
                          ) ||
                            199 /
                              parseInt(
                                product.product_type[currentTypeIndex].sizes[
                                  currentSizeIndex
                                ].price,
                              )) * 100
                        ).toFixed()}%`}
                        )
                      </span>
                    </>
                  )}
                </div>

                <span>Inclusive of VAT</span>
              </div>

              <div className="products-show__wrapper__main__info__package-type">
                <Package size={27} />
                <span>Same Day Delivery Available</span>
              </div>

              <RatingStars />

              <div className="products-show__wrapper__main__info__varients">
                <div>
                  <span>{product.product_type[currentTypeIndex].name}</span>
                  <div>
                    {product.product_type.map((item, index) => {
                      return (
                        <>
                          <div
                            onClick={() => {
                              setCurrentTypeIndex(index);
                              const imgs =
                                mainImgsRef.current?.querySelectorAll(
                                  ".lazyLoaingImg-wrapper",
                                );
                              imgs?.forEach((img) =>
                                img.classList.remove("show--img"),
                              );
                            }}
                          >
                            <LazyImg
                              key={index}
                              src={item.icon}
                              alt={product.title}
                              className={`${
                                currentTypeIndex === index && "active"
                              }`}
                              loading="lazy"
                              draggable={false}
                            />
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Button variant={"link"}>size Guide</Button>
                </div>
              </div>

              <div className="products-show__wrapper__main__info__sizes">
                <span>
                  Size:
                  {` ${product.product_type[currentTypeIndex].sizes[currentSizeIndex].size}`}
                </span>

                <div>
                  {product.product_type[currentTypeIndex].sizes.map(
                    (item, index) => {
                      return (
                        <Button
                          key={index}
                          variant={"outline"}
                          className={`${
                            currentSizeIndex === index && "active"
                          }`}
                          onClick={() => setCurrentSizeIndex(index)}
                        >
                          {item.size}
                        </Button>
                      );
                    },
                  )}
                </div>
              </div>

              <div className="products-show__wrapper__main__info__buttons">
                <div>
                  <Button variant={"default"}>
                    <AiOutlineShopping size={25} />
                    <span>Add to Basket</span>
                  </Button>
                  <Button variant={"outline"}>
                    <Heart size={25} />
                    <span>Add to Favourites</span>
                  </Button>
                </div>

                <ShareProductWrapper />
              </div>

              <div className="products-show__wrapper__main__info__recovery">
                {/* <img src={frame} alt="recovery box" /> */}
                <GoPackageDependents size={27} />
                <span>Free online returns within 14 days</span>
              </div>
            </div>
          </div>

          <div className="products-show__wrapper__second">
            <div className="products-show__wrapper__second__reviews">
              <span>Ratings + Reviews</span>
              <div>
                <div>
                  <span>No reviews yet.</span>
                  <span>
                    Tell others what you think. Be the first to review this
                    product.
                  </span>
                </div>
                <Button variant={"default"}>Write a review</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductShow;
