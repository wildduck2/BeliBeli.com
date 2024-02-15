export interface ReviewCardProps {
  index: number;
  reviews: review;
}

export interface review {
  id: number;
  created_at: Date;
  email: string;
  user_id: string;
  overall_rating: number;
  review_title: string;
  review_discription: string;
  product_recommended: boolean;
  nickname: string;
  true_to_size: "small" | "normal" | "large";
  fit: "tight" | "normal" | "large";
  lenght: "small" | "normal" | "large";
  this_review_was_helpufll: Array<boolean>;
}
