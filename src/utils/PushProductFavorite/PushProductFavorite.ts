import { FavouritesProduct } from '@/components/Pages/WishList/WishList.types'
import { supabase } from '@/supabase/supabase'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { toast } from 'sonner'
import { PushProductProps } from './PushProductFavorite.types'
import { User, addProductToFavorite } from '@/context'

const PushProductFavorite = async ({
  favourite_product,
  favourite_products,
  dispatch
}: PushProductProps) => {
  const promise = new Promise((resolve, reject) => {
    const cb = async () => {
      try {
        const { data: user, error: usererror } = await supabase.auth.getUser()

        if (usererror) {
          reject(usererror)
          return
        } else {
          if (
            favourite_products.find(
              (item) =>
                item.product_type.art_no ===
                favourite_product.product_type.art_no
            )
          ) {
            toast.error('Product already in favourites')
            reject(false)
          } else {
            const finalFavouriteProducts: FavouritesProduct[] = [
              ...favourite_products,
              favourite_product
            ]

            const { data, error } = (await supabase
              .from('users')
              .update({
                favourite_products: finalFavouriteProducts
              })
              .eq('id', user.user.id)
              .select()) as PostgrestSingleResponse<User[]>

            if (error) {
              reject(usererror)
              throw new Error('Failed to add product to favorite')
            } else {
              resolve(data![0].user_cart)
              dispatch(addProductToFavorite({ product: favourite_product }))
            }
          }
        }
      } catch (error) {
        reject(error)
        throw new Error('something went wrong in adding product to favorite')
      }
    }
    cb()
  })

  toast.promise(promise, {
    success: 'Product added to favorite!',
    loading: 'Adding product to favorite...',
    error: 'Something went wrong!'
  })
}

export { PushProductFavorite }
