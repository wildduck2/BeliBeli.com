import { FavouritesProduct } from '@/components/Pages/WishList/WishList.types'
import { User } from '@/context/Data.types'
import { supabase } from '@/supabase/supabase'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { toast } from 'sonner'

export interface PushProductProps {
  favourite_products: FavouritesProduct[]
}
const PushProductFavorite = async ({
  favourite_products
}: PushProductProps) => {
  const promise = new Promise((resolve, reject) => {
    const cb = async () => {
      try {
        const { data: user, error: usererror } = await supabase.auth.getUser()

        if (usererror) {
          reject(usererror)
          return
        } else {
          const { data, error } = (await supabase
            .from('users')
            .update({
              favourite_products: favourite_products
            })
            .eq('id', user.user.id)
            .select()) as PostgrestSingleResponse<User[]>

          if (error) {
            reject(usererror)
            throw new Error('Failed to add product to favorite')
          } else {
            console.log(favourite_products)
            localStorage.setItem(
              'cartProducts',
              JSON.stringify(favourite_products)
            )
            resolve(data![0].user_cart)
          }
        }
      } catch (error) {
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
