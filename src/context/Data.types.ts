import { UserData } from "@/hooks";

export type ProductImage = Array<string>;
export interface ProductSize {
  size: string;
  price: string;
  discount: string | null;
}

export interface ProductVariation {
  top_imgs: ProductImage;
  low_imgs: ProductImage;
  sizes: ProductSize[];
  icon: string;
  art_no: string;
  name: string;
}

export interface Product_review {
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
}

export interface Product {
  id: number;
  type: string;
  title: string;
  description: string;
  product_type: ProductVariation[];
  product_category: string;
  product_review: Product_review[];
  treding: boolean;
  choosen: boolean;
  fit:string
}

export interface otherImgsTypes {
  id: number;
  created_at: Date;
  page__name: string;
  name: string[];
  category: string[];
  category__img__high: string[];
  category__img__low: string[];
}

export interface BannersType {
  id: number;
  created_at: Date;
  title: string[];
  subtitle: string;
  top_img: string;
  low_img: string;
  mobile_top_img: string;
  mobile_low_img: string;
  button: string[];
}

export interface initialStateTypes {
  satatus: "loading" | "succeeded" | "failed";
  error: string | null;

  bannersData: BannersType[] | null;
  categoriesData: otherImgsTypes[] | null;
  products: Product[] | null;
  userData: UserData | null;
  logged: boolean;
}
