import { frame } from "@/assets";
import { Button } from "@/components/UI";
import { Product } from "@/context/Data.types";
import { Heart, Package, Share, Star } from "lucide-react";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { useLocation, useParams } from "react-router-dom";

const ProductShow = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const id = useParams();
  const { state } = useLocation();
  const product: Product = state;

  console.log(product);

  return (
    <>
      <main className="products-shop">
        <span>{`Home / Sale / ${product.type} / ${product.product_category} / ${product.title}`}</span>

        <div className="products-shop__wrapper">
          <div>
            {product.product_type[0].top_imgs.map((item, index) => {
              return <img key={index} src={item} alt={product.title} />;
            })}
          </div>

          <div>
            <h1>{product.title}</h1>

            <div>
              <div>
                <h2>{product.product_type[0].sizes[0].price}</h2>
                <h2>{product.product_type[0].sizes[0].discount}</h2>
                <span>(save {`${25}%`})</span>
              </div>

              <span>Inclusive of VAT</span>
            </div>

            <div>
              <Package size={27} />
              <span>Same Day Delivery Available</span>
            </div>

            <div>
              <div>
                <Star size={27} />
                <Star size={27} />
                <Star size={27} />
                <Star size={27} />
                <Star size={27} />
              </div>
              <span>({`${4}`})</span>
              <Button variant={"link"}>Write a Review</Button>
            </div>

            <div>
              <span>{product.product_type[currentIndex].name}</span>
              {product.product_type.map((item, index) => {
                return <img key={index} src={item.icon} alt={product.title} />;
              })}
              <div></div>
            </div>

            <div>
              <span>
                Size:{" "}
                {`${product.product_type[currentIndex].sizes[currentIndex].size}`}
              </span>

              <div>
                {product.product_type[currentIndex].sizes.map((item, index) => {
                  return (
                    <button key={index} onClick={() => setCurrentIndex(index)}>
                      {item.size}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div>
                <Button variant={"default"}>
                  <AiOutlineShopping size={27} />
                  <span>Add to Basket</span>
                </Button>
                <Button variant={"default"}>
                  <Heart size={27} />
                  <span>Add to Basket</span>
                </Button>
              </div>

              <div>
                <Share size={27} />
                <span>Share</span>
              </div>
            </div>

            <div>
              <img src={frame} alt="recovery box" />
              <span>Free online returns within 14 days</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductShow;
