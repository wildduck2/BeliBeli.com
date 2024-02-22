import { ProductVariation } from '@/context/Data.types'
import { UUID } from 'crypto'

export interface FavouritesProduct {
  id: UUID
  user_id: string
  created_at: Date
  type: string
  title: string
  description: string
  product_type: ProductVariation
  product_category: string
  review_id: UUID
  treding: boolean
  choosen: boolean
  fit: string
}
