import { Product, Product_review } from "@/context/Data.types";

export interface WriteReviewWrapperProps {
  img: string;
  lowImg: string;
  title: string;
  productId: number;
  setAllReviews: React.Dispatch<React.SetStateAction<Product_review>>;
}
