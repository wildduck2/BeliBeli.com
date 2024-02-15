import React from "react";
import { ReviewCardProps } from "./ReviewCard.types";
import { Box, Rating } from "@mui/material";
import { Star } from "lucide-react";
import { Button, Label } from "@/components/UI";
import { supabase } from "@/supabase/supabase";
import { useLocation } from "react-router-dom";
import { Product } from "@/context/Data.types";
import { toast } from "sonner";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

const ReviewCard: React.FC<ReviewCardProps> = ({ index, reviews }) => {
  const time = reviews.created_at;
  const date = new Date(time);
  const formatter = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const created_at = formatter.format(date);

  const reviewTrue = reviews.this_review_was_helpufll.filter(
    (item) => item === true,
  );

  const reviewFalse = reviews.this_review_was_helpufll.filter(
    (item) => item === false,
  );

  const [reviewtrue, setReviewTrue] =
    React.useState<Array<boolean>>(reviewTrue);
  const [reviewfalse, setReviewFalse] =
    React.useState<Array<boolean>>(reviewFalse);
  const [reviewHelpfull, setReviewHelpfull] = React.useState<boolean>(false);
  const [reviewNotHelpfull, setReviewNotHelpfull] =
    React.useState<boolean>(false);

  const { state } = useLocation();
  const product: Product = state;

  return (
    <li>
      <div>
        <h3>{reviews.nickname}</h3>
        <div>
          <span>True to Size: {reviews.true_to_size}</span>
          <span>Fit: {reviews.fit}</span>
          <span>Length: {reviews.lenght}</span>
        </div>
      </div>

      <div>
        <div>
          <Box component="fieldset" borderColor="transparent">
            <Rating
              name="customized-empty"
              defaultValue={reviews.overall_rating}
              precision={0.5}
              emptyIcon={<Star />}
              readOnly
            />
          </Box>
          <span className="rating">({`${reviews.overall_rating}`})</span>
        </div>

        <div>
          <h4>{reviews.review_title}</h4>
          <span>{created_at}</span>
          <p>{reviews.review_discription}</p>
        </div>
        <div>
          <Label htmlFor="rating">Was this review helpful?</Label>
          <div>
            <Button
              variant={"secondary"}
              onClick={() => {
                setReviewTrue([...reviewtrue, true]);
                setReviewHelpfull(true);
              }}
              className={reviewHelpfull ? "active-green" : ""}
              disabled={reviewNotHelpfull || reviewHelpfull}
            >
              <span>Yes</span>
              <sub>({reviewtrue.length})</sub>
            </Button>
            <Button
              variant={"secondary"}
              onClick={() => {
                setReviewFalse([...reviewfalse, true]);
                setReviewNotHelpfull(true);
                appendThisReviewWasHelpfullData({
                  index: index,
                  value: false,
                  state: product,
                });
              }}
              className={reviewNotHelpfull ? "active-red" : ""}
              disabled={reviewHelpfull || reviewNotHelpfull}
            >
              <span>No</span>
              <sub>({reviewfalse.length})</sub>
            </Button>
            <Button variant={"secondary"}>Report</Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ReviewCard;

export interface appendThisReviewWasHelpfullDataProps {
  index: number;
  value: boolean;
  state: Product;
}

const appendThisReviewWasHelpfullData = async ({
  index,
  value,
  state,
}: appendThisReviewWasHelpfullDataProps) => {
  const { data: reviews, error } = (await supabase
    .from("products_reviews")
    .select("*")
    .eq("id", state.review_id)) as PostgrestSingleResponse<ReviewCardProps[]>;

  if (!error) {
    const review = reviews![0].reviews as Record<string, any>;
    (review[index].this_review_was_helpufll as Array<boolean>).push(value);

    const { data: updatedReviews, error: updateError } = (await supabase
      .from("products_reviews")
      .update({ reviews: review })
      .eq("id", state.review_id)) as PostgrestSingleResponse<ReviewCardProps[]>;

    if (!updateError) {
      toast.success("Thank you for your feedback");
      console.log("updatedReviews", updatedReviews);
    } else {
      toast.error("Something went wrong");
    }
  } else {
    toast.error("Something went wrong");
  }
};
