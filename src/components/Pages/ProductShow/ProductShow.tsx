import { frame } from "@/assets";
import { Button } from "@/components/UI";
import { Product } from "@/context/Data.types";
import { Heart, Package, Share, Star } from "lucide-react";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useLocation, useParams } from "react-router-dom";
import { TbShare3 } from "react-icons/tb";

const ProductShow = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const id = useParams();
  const { state } = useLocation();
  const product: Product = state;

  console.log(product);

  return (
    <>
      <main className="products-show">
        <span>{`Home / Sale / ${product.type} / ${product.product_category} / ${product.title}`}</span>

        <div className="products-show__wrapper">
          <div className="products-show__wrapper__main">
            <div className="products-show__wrapper__main__imgs">
              <img
                src={product.product_type[0].top_imgs[0]}
                alt={product.title}
              />
              <img
                src={product.product_type[0].top_imgs[1]}
                alt={product.title}
              />

              <div className="products-show__wrapper__main__imgs__info">
                <p>{product.description}</p>

                <div>
                  <span>FIT:</span>
                  <span>{product.fit}</span>
                </div>

                <div>
                  <span>Art. No.:</span>
                  <span>{product.product_type[currentIndex].art_no}</span>
                </div>

                <Button variant={"link"}>DETAILS</Button>
              </div>

              <img
                src={product.product_type[0].top_imgs[2]}
                alt={product.title}
              />
              <img
                src={product.product_type[0].top_imgs[3]}
                alt={product.title}
              />
              <img
                src={product.product_type[0].top_imgs[4]}
                alt={product.title}
              />
              <img
                src={product.product_type[0].top_imgs[5]}
                alt={product.title}
              />
            </div>

            <div className="products-show__wrapper__main__info">
              <h1>{product.title}</h1>

              <div className="products-show__wrapper__main__info__prize">
                <div>
                  <h2>EGP {product.product_type[0].sizes[0].price}</h2>
                  <h2>EGP {product.product_type[0].sizes[0].price}</h2>
                  <span>(save {`${25}%`})</span>
                </div>

                <span>Inclusive of VAT</span>
              </div>

              <div className="products-show__wrapper__main__info__package-type">
                <Package size={27} />
                <span>Same Day Delivery Available</span>
              </div>

              <div className="products-show__wrapper__main__info__review">
                <div className={`${4}`}>
                  {/* <div className="review__background"></div> */}
                  <Star size={27} />
                  <Star size={27} />
                  <Star size={27} />
                  <Star size={27} />
                  <Star size={27} />
                </div>
                <span>({`${4}`})</span>
                <Button variant={"link"}>Write a Review</Button>
              </div>

              <div className="products-show__wrapper__main__info__varients">
                <div>
                  <span>{product.product_type[currentIndex].name}</span>
                  <div>
                    {product.product_type.map((item, index) => {
                      return (
                        <img
                          key={index}
                          src={item.icon}
                          alt={product.title}
                          className={`${currentIndex === index && "active"}`}
                        />
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
                  {` ${product.product_type[currentIndex].sizes[currentIndex].size}`}
                </span>

                <div>
                  {product.product_type[currentIndex].sizes.map(
                    (item, index) => {
                      return (
                        <Button
                          key={index}
                          variant={"outline"}
                          onClick={() => setCurrentIndex(index)}
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
                    <span>Add to Basket</span>
                  </Button>
                </div>

                <Button variant={"ghost"}>
                  <TbShare3 size={25} />
                  <span>Share</span>
                </Button>
              </div>

              <div className="products-show__wrapper__main__info__recovery">
                <img src={frame} alt="recovery box" />
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
