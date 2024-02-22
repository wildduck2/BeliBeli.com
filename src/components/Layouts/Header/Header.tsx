import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/context/store'
import {
  HeaderFavouriteProducts,
  HeaderShoppingCard,
  Link,
  Search
} from '@/components/UI'
import { showMobileMenu } from '@/context/Utils'

import { HiOutlineHeart } from 'react-icons/hi2'
import { logo } from '../../../assets'

const Header = () => {
  const route = useNavigate()
  const selector = useSelector((state: RootState) => state.util)
  const dispatch = useDispatch()

  const showMenuHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.classList.toggle('header__menu--show')
    dispatch(showMobileMenu(!selector.mobileMenuActive))
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <Search />

        <div>
          <Link href="/" className="header__logo">
            <img width={125} height={30} src={logo} alt="logo img" />
          </Link>

          <div className="header__functionality">
            <HeaderFavouriteProducts />
            <HeaderShoppingCard />
          </div>

          <div className="header__menu" onClick={showMenuHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
