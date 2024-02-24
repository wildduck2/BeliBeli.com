import { CartProduct } from '@/components/Pages/Cart/Cart.types'
import { FavouritesProduct } from '@/components/Pages/WishList/WishList.types'

export interface InitStateTypes {
  mobileMenuActive: boolean
  inputsValid: Record<string, boolean>
  emailisnotvalid: boolean
  cartProducts: CartProduct[]
  favouriteProducts: FavouritesProduct[]
}
