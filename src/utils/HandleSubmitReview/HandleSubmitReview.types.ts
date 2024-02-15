import { Product, Product_review } from "@/context/Data.types";

export interface handleSubmitProps {
  product_id: number;
  rate: number;
  reviewTitle: string;
  reviewDiscription: string;
  nickname: string;
  email: string;
  userId: string;
  productRecommended: boolean;
  trueToSize: "small" | "normal" | "large";
  fit: "tight" | "normal" | "large";
  lenght: "small" | "normal" | "large";
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  dialogClose: React.RefObject<HTMLButtonElement>;
  setAllReviews: React.Dispatch<React.SetStateAction<Product_review[]>>;
}
