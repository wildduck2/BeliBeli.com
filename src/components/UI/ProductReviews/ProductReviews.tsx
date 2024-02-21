import React from 'react';
import { Box, Rating } from '@mui/material';
import { Star } from 'lucide-react';
import { Button, WriteReviewWrapper } from '..';
import { ReviewCard } from '@/components/Layouts';
import {
  MoreReviewsButtonProps,
  ProductReviewsProps
} from './ProductReviews.types';
import { Product_review } from '@/context/Data.types';
import { Icons } from '@/components/Layouts/Log/Icons';
import { toast } from 'sonner';

const ProductReviews: React.FC<ProductReviewsProps> = ({
  finalRate,
  product,
  reviews,
  currentTypeIndex
}) => {
  const [allReviews, setAllReviews] = React.useState<Product_review>(reviews);
  const [previewedCards, setPreviewedCards] = React.useState<number>(1);

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
                  <span>({allReviews.reviews.length}) Reviews</span>
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
        {allReviews.reviews.map((item, index) => {
          return (
            index <= previewedCards && (
              <ReviewCard key={index} index={index} review={item} />
            )
          );
        })}
      </ul>

      <MoreReviewsButton
        allReviews={allReviews}
        setPreviewedCards={setPreviewedCards}
      />
    </>
  );
};

function MoreReviewsButton({
  allReviews,
  setPreviewedCards
}: MoreReviewsButtonProps) {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <Button
      variant={'default'}
      onClick={() => {
        setPreviewedCards((prev) => {
          if (allReviews.reviews.length < prev + 2) {
            toast.error('No more reviews', { duration: 2000 });
          }
          return prev >= allReviews.reviews.length ? prev : prev + 2;
        });
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      }}
    >
      {loading ? <Icons.spinner className="animate-spin" /> : 'Submit'}
    </Button>
  );
}

export default ProductReviews;
