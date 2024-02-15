import React from "react";
import { Box, Rating } from "@mui/material";
import { Star } from "lucide-react";
import { WriteReviewWrapper } from "..";
import { ReviewCard } from "@/components/Layouts";
import { ProductReviewsProps } from "./ProductReviews.types";
import { Product_review } from "@/context/Data.types";

const ProductReviews: React.FC<ProductReviewsProps> = ({
  finalRate,
  product,
  currentTypeIndex,
}) => {
  const [allReviews, setAllReviews] = React.useState<Product_review[]>(
    product.product_reviews,
  );

  return (
    <>
      <div className="products-show__wrapper__second__reviews">
        <span>Ratings + Reviews</span>
        <div>
          <div className="rate">
            {finalRate ? (
              <div>
                <div>
                  <Box component="fieldset" borderColor="transparent">
                    <Rating
                      name="customized-empty"
                      defaultValue={finalRate}
                      precision={0.5}
                      emptyIcon={<Star />}
                      readOnly
                    />
                  </Box>
                  <span>{`${finalRate.toFixed(1)}`}</span>
                  <span>({allReviews.length}) Reviews</span>
                </div>
              </div>
            ) : (
              <>
                <span>No reviews yet.</span>
                <span>
                  Tell others what you think. Be the first to review this
                  product.
                </span>
              </>
            )}
          </div>
          <WriteReviewWrapper
            img={product.product_type[currentTypeIndex].top_imgs[1]}
            lowImg={product.product_type[currentTypeIndex].low_imgs[1]}
            title={product.title}
            productId={product.id}
            setAllReviews={setAllReviews}
          />
        </div>
      </div>

      <ul className="products-show__wrapper__second__items">
        {allReviews.map((item, index) => {
          return <ReviewCard key={index} review={item} />;
        })}
      </ul>
    </>
  );
};

export default ProductReviews;
