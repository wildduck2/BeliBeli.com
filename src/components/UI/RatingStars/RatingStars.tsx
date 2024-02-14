import React from "react";
import { Button } from "..";
import { Star } from "lucide-react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

export interface RatingStarsProps {
  value: number;
  precision?: number;
  readOnly: boolean;
}
const RatingStars: React.FC<RatingStarsProps> = ({
  value,
  precision,
  readOnly,
}) => {
  return (
    <>
      <div>
        <Box component="fieldset" borderColor="transparent">
          <Rating
            name="customized-empty"
            defaultValue={value}
            precision={precision}
            emptyIcon={<Star />}
            readOnly={readOnly}
          />
        </Box>
      </div>
      <span>({`${value}`})</span>
      <Button variant={"link"}>Write a Review</Button>
    </>
  );
};

export default RatingStars;
