import { Product, Product_review } from '@/context/Data/Data.types'

export interface ProductReviewsProps {
  finalRate: number
  reviews: Product_review
  product: Product
  currentTypeIndex: number
}
export interface MoreReviewsButtonProps {
  allReviews: Product_review
  setPreviewedCards: React.Dispatch<React.SetStateAction<number>>
}
