import { FavouritesProduct } from '@/components/Pages/WishList/WishList.types'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'

export interface PushProductProps {
  favourite_product: FavouritesProduct
  favourite_products: FavouritesProduct[]
  dispatch: Dispatch<AnyAction>
}
