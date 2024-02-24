import { CartProduct } from '@/components/Pages/Cart/Cart.types'
import { UUID } from 'crypto'
import React, { Dispatch } from 'react'
import { AnyAction } from 'redux'

export interface handleQuantityChangeProps {
  newQuantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  dispatch: Dispatch<AnyAction>
  item: CartProduct
  user_id: UUID
}
