import { ProductVariation } from '@/context/Data/Data.types'
import { UUID } from 'crypto'

export interface FavouritesProduct {
  id: UUID
  user_id: string
  title: string
  product_type: ProductVariation
}
