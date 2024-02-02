import { Product } from "@/context/Data";

export interface SwiperTypes {
    DATA__NAME: Product[] | null;
    FILTER__QUERY?: string;
}

export interface CardInfoTypes {
  choosen?: boolean;
  title: string;
  discount?: string | null;
  price?: string;
}