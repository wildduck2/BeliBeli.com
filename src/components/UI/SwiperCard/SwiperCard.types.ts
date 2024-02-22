import { FavouritesProduct } from '@/components/Pages/WishList/WishList.types'
import { Product } from '@/context/Data.types'

export interface SwiperCardProps {
  item?: Product
  favouriteItem?: FavouritesProduct
  width: number
  height: number
}
