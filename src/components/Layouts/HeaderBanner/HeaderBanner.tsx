import React from 'react'

import Link from '../../UI/Link'

const HeaderBanner = () => {
  return (
    <div
      className='
          container
          flex
          items-center
          justify-center
          gap-6
          py-2
          mx-[auto]
      '
    >
      {/* here wher i will show the log out button if the user is utharized */}
      <>
        <Link href={'/signup'}>Craete An Account</Link>
        <Link href={'/login'}>Login</Link>
      </>
      <Link href={'findstore'}>Find Store</Link>
    </div>
  )
}

export default HeaderBanner
