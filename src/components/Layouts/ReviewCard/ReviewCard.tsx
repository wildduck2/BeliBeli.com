import React from "react";
import { ReviewCardProps } from "./ReviewCard.types";
import { Box, Rating } from "@mui/material";
import { Star } from "lucide-react";
import { Button, Label } from "@/components/UI";

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const time = review.created_at;
  const date = new Date(time);
  const formatter = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const created_at = formatter.format(date);

  return (
    <li>
      <div>
        <h3>{review.nickname}</h3>
        <div>
          <span>True to Size: {review.true_to_size}</span>
          <span>Fit: {review.fit}</span>
          <span>Length: {review.lenght}</span>
        </div>
      </div>

      <div>
        <div>
          <Box component="fieldset" borderColor="transparent">
            <Rating
              name="customized-empty"
              defaultValue={review.overall_rating}
              precision={0.5}
              emptyIcon={<Star />}
              readOnly
            />
          </Box>
          <span className="rating">({`${review.overall_rating}`})</span>
        </div>

        <div>
          <h4>{review.review_title}</h4>
          <span>{created_at}</span>
          <p>{review.review_discription}</p>
        </div>
        <div>
          <Label htmlFor="rating">Was this review helpful?</Label>
          <div>
            <Button variant={"secondary"}>
              <span>Yes</span>
              <sub>
                (
                {
                  review.this_review_was_helpufll.filter(
                    (item) => item === true,
                  ).length
                }
                )
              </sub>
            </Button>
            <Button variant={"secondary"}>
              <span>No</span>
              <sub>
                (
                {
                  review.this_review_was_helpufll.filter(
                    (item) => item === false,
                  ).length
                }
                )
              </sub>
            </Button>
            <Button variant={"secondary"}>Report</Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ReviewCard;
