import { CartProduct } from '@/components/Pages/Cart/Cart.types'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'

export interface RemoveProductCartProps {
  product: CartProduct
  dispatch: Dispatch<AnyAction>
}
