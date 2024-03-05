import React from 'react'

import Link from '../../UI/Link'
import { supabase } from '../../../supabase/supabase'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState, signout } from '@/context'

const HeaderBanner = (): React.JSX.Element => {
  const userLogged = useSelector((state: RootState) => state.user.userLogged)
  const userSession = useSelector((state: RootState) => state.user.userSession)
  const dispatch = useDispatch()

  console.log('thi is use session', userSession)

  return (
    <div className="banner">
      {userLogged ? (
        <>
          <Link className="banner__link" href={'/account/my-account'}>
            {userSession?.user_metadata.full_name}
          </Link>
          <Link
            className="banner__link"
            href={'/'}
            onClick={() => {
              void supabase.auth.signOut()
              dispatch(signout())
            }}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link className="banner__link" href={'/signup'}>
            Craete An Account
          </Link>
          <Link className="banner__link" href={'/login'}>
            Login
          </Link>
        </>
      )}

      <Link className="banner__link" href={'findstore'}>
        Find Store
      </Link>
    </div>
  )
}

export default HeaderBanner
