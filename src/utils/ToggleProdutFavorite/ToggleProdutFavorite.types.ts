import { FavouritesProduct } from '@/components/Pages'
import React from 'react'
import { AnyAction } from 'redux'

export interface ToggleProdutFavoriteTypes {
  e: React.MouseEvent<HTMLDivElement>
  favourite_product: FavouritesProduct
  favourite_products: FavouritesProduct[]
  dispatch: React.Dispatch<AnyAction>
}
