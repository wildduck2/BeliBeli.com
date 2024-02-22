import { User } from '@/context/Data.types'
import { removeProductCart } from '@/context/Utils'
import { supabase } from '@/supabase/supabase'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { toast } from 'sonner'
import { RemoveProductCartProps } from './RemoveProductCart.types'

const RemoveProductCart = async ({
  product,
  dispatch
}: RemoveProductCartProps) => {
  const promise = new Promise((resolve, reject) => {
    const cb = async () => {
      try {
        const { data: user, error: usererror } = await supabase.auth.getUser()

        if (usererror) {
          reject(usererror)
          return
        } else {
          const { data: currentCart, error: currentCartError } = (await supabase
            .from('users')
            .select('user_cart')
            .eq('id', user.user.id)) as PostgrestSingleResponse<User[]>

          if (currentCartError) {
            reject(usererror)
            return
          } else {
            const finalCart = [...(currentCart![0].user_cart || [])]
            finalCart.splice(
              finalCart.findIndex((item) => item.id === product.id),
              1
            )

            const { data, error } = (await supabase
              .from('users')
              .update({
                user_cart: finalCart
              })
              .eq('id', user.user.id)
              .select()) as PostgrestSingleResponse<User[]>

            if (error) {
              reject(usererror)
              throw new Error('something went wrong')
            } else {
              dispatch(removeProductCart({ product }))
              resolve(data![0].user_cart)
            }
          }
        }
      } catch (error) {
        throw new Error('something went wrong')
      }
    }

    cb()
  })

  toast.promise(promise, {
    success: 'Product removed from cart!',
    loading: 'Removing product from cart...',
    error: 'Something went wrong!'
  })
}

export { RemoveProductCart }
