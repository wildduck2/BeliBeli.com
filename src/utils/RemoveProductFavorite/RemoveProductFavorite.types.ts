import { FavouritesProduct } from '@/components/Pages/WishList/WishList.types'
import { Dispatch } from 'react'
import { AnyAction } from 'redux'

export interface RemoveProductFavoriteProps {
  product: FavouritesProduct
  dispatch: Dispatch<AnyAction>
}
