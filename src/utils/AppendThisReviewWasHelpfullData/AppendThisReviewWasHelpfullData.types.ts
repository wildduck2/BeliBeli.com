import { Product, ReviewWasHelpfull } from "@/context/Data.types";

export interface appendThisReviewWasHelpfullDataProps {
  index: number;
  value: boolean;
  state: Product;
  reviewValue: ReviewWasHelpfull[];
  setReviewValue: React.Dispatch<React.SetStateAction<ReviewWasHelpfull[]>>;
  setReviewHelpfull: React.Dispatch<React.SetStateAction<boolean | null>>;
}
