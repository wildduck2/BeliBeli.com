import { ProductImage, ProductVariation } from '@/context'
import { UUID } from 'crypto'

export interface CartProduct {
  id: UUID
  user_id: string
  name: string
  price: number
  discount: number
  img: ProductImage
  color: string
  size: string
  quantity: number
  art_no: string
  full_type_data?: ProductVariation
}

export interface CartProductProps {
  item: CartProduct
  user_id: UUID
}

export interface handleQuantityChange {
  index: number
  newQuantity: number
}
