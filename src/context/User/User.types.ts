import { UUID } from 'crypto'
import { review } from '..'
import { CartProduct, FavouritesProduct } from '@/components/Pages'
import { User as SessionUser } from '@supabase/supabase-js'

export interface userSliceType {
  userData: User | null
  userSession: SessionUser | null
  userLogged: boolean
}

export interface User {
  id: UUID
  full_name: string
  avatar_url: string
  billing_address: undefined
  payment_method: undefined
  user_cart: CartProduct[]
  favourite_products: FavouritesProduct[]
  product_reviews: review[]
}
