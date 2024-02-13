import React from "react";
import { Button } from "..";
import { Star } from "lucide-react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

const RatingStars = () => {
  return (
    <div className="products-show__wrapper__main__info__review">
      <div>
        <Box component="fieldset" borderColor="transparent">
          <Rating
            name="customized-empty"
            defaultValue={4}
            // precision={0.5}
            emptyIcon={<Star />}
            readOnly
          />
        </Box>
      </div>
      <span>({`${4}`})</span>
      <Button variant={"link"}>Write a Review</Button>
    </div>
  );
};

export default RatingStars;
