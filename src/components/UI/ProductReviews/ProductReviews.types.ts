import { Product } from "@/context/Data.types";

export interface ProductReviewsProps {
    finalRate: number;
    product: Product;
    currentTypeIndex: number;
}