import { CartProduct } from '@/components/Pages/Cart/Cart.types'
import { User } from '@/context/Data.types'
import { supabase } from '@/supabase/supabase'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { toast } from 'sonner'

export interface PushProductCartProps {
  products: CartProduct[]
}
const PushProductCart = async ({ products }: PushProductCartProps) => {
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
              user_cart: products
            })
            .eq('id', user.user.id)
            .select()) as PostgrestSingleResponse<User[]>

          if (error) {
            reject(usererror)
            throw new Error('Failed to add product to cart')
          } else {
            console.log(products)
            localStorage.setItem('cartProducts', JSON.stringify(products))
            resolve(data![0].user_cart)
          }
        }
      } catch (error) {
        throw new Error('something went wrong in adding product to cart')
      }
    }
    cb()
  })

  toast.promise(promise, {
    success: 'Product added to cart!',
    loading: 'Adding product to cart...',
    error: 'Something went wrong!'
  })
}

export { PushProductCart }
