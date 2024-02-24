import React from 'react'
import { Product_review } from '@/context/Data/Data.types'
import { UUID } from 'crypto'

export interface WriteReviewWrapperProps {
  img: string
  lowImg: string
  title: string
  productId: UUID
  setAllReviews: React.Dispatch<React.SetStateAction<Product_review>>
}
