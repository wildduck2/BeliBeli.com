import { CartProduct } from '@/components/Pages'

export interface UpdateCartProductsProps {
  allProducts: CartProduct[]
  product: CartProduct
  user_id: string
  quantity: number
}
