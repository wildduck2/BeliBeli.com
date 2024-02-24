import { UUID } from 'crypto'

export interface CartProduct {
  id: UUID
  user_id: string
  name: string
  price: number
  discount: number
  img: string
  color: string
  size: string
  quantity: number
  art_no: string
}

export interface CartProductProps {
  item: CartProduct
  user_id: UUID
}

export interface handleQuantityChange {
  index: number
  newQuantity: number
}
