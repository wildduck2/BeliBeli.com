import { PostgrestSingleResponse } from '@supabase/supabase-js'
import { supabase } from '@/supabase/supabase'
import { UpdateCartProductsProps } from './updateCartProductsFunc.types'
import { toast } from 'sonner'
import { User } from '@/context'

const updateCartProductsFunc = async ({
  product,
  user_id,
  quantity
}: UpdateCartProductsProps) => {
  try {
    const { data: currentData, error: currentError } = (await supabase
      .from('users')
      .select('*')
      .eq('id', user_id)) as PostgrestSingleResponse<User[]>

    const finalData = currentData![0].user_cart.map((item) => {
      if (item.id === product.id) {
        item.quantity = quantity
        return item
      } else {
        return item
      }
    })

    const { data: updatedData, error: updateError } = (await supabase
      .from('users')
      .update({ user_cart: finalData })
      .eq('id', user_id)
      .select()) as PostgrestSingleResponse<User[]>

    if (updateError) {
      throw new Error('deez nuts')
    }
  } catch (error) {
    toast.error('something went wrong in adding product to cart')
    throw new Error('something went wrong in adding product to cart')
  }
}
export { updateCartProductsFunc }
