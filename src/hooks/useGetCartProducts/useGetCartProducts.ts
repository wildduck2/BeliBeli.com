import { getCartProducts, getFavoriteProducts } from '@/context/utils/Utils'
import { RootState } from '@/context/store'
import { supabase } from '@/supabase/supabase'
import {
  PostgrestSingleResponse,
  User as UserSupa
} from '@supabase/supabase-js'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { User, getUserData, getUserSession } from '@/context'

const useGetCartProducts = () => {
  const logged = useSelector((state: RootState) => state.user.userLogged)
  const dispatch = useDispatch()
  const [error, setError] = React.useState<string>('')
  const [user, setUser] = useState<UserSupa>()

  const cb = async () => {
    try {
      if (logged) {
        const { data: user, error: userError } = await supabase.auth.getUser()

        if (userError) {
          toast.error('You are not logged in')
          throw new Error(userError.message)
        } else {
          setUser(user.user)

          const { data: UserData, error } = (await supabase
            .from('users')
            .select('user_cart, favourite_products')
            .eq('id', user.user?.id)) as PostgrestSingleResponse<User[]>

          if (UserData) {
            // dispatch(getCartProducts(data[0].user_cart))
            // dispatch(getFavoriteProducts(data[0].favourite_products))
            dispatch(getUserSession(user.user))
            dispatch(getUserData(UserData[0]))
          } else {
            toast.error('Faild to get cart')
            setError(error.message)
          }
        }
      }
    } catch (error) {
      toast.error('Faild to get cart')
      throw new Error(error as string)
    }
  }

  useEffect(() => {
    cb()
  }, [])

  return { error, user } as const
}
export default useGetCartProducts
