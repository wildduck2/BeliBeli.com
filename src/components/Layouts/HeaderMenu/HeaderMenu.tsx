import React from 'react'
import { Button, Link } from '@/components/UI'
import {
  BabayHeaderNavigationLink,
  BeliBeliHomeHeaderNavigationLink,
  DividedHeaderNavigationLink,
  KidsHeaderNavigationLink,
  MenHeaderNavigationLink,
  SaleHeaderNavigationLink,
  SportsHeaderNavigationLink,
  SustainabilityHeaderNavigationLink,
  WomenHeaderNavigationLink
} from '@/constants'
import { MutableRefObject, useRef, useState } from 'react'
import { RootState } from '@/context/store'
import { useDispatch, useSelector } from 'react-redux'
import { showMobileMenu } from '@/context/utils/Utils'

export const navigationLinksData = [
  WomenHeaderNavigationLink,
  MenHeaderNavigationLink,
  DividedHeaderNavigationLink,
  BabayHeaderNavigationLink,
  KidsHeaderNavigationLink,
  BeliBeliHomeHeaderNavigationLink,
  SportsHeaderNavigationLink,
  SaleHeaderNavigationLink,
  SustainabilityHeaderNavigationLink
]

const HeaderMenu = () => {
  const [currentactive, setCurrentactive] = useState<boolean>(false)

  const dispatch = useDispatch()
  const selector = useSelector((state: RootState) => state.util)
  const menuRef = useRef() as MutableRefObject<HTMLUListElement>

  const hideMenuTreeHandler = () => {
    const uls = menuRef.current.querySelectorAll(
      '.header-menu__category-list'
    ) as NodeListOf<HTMLUListElement>
    uls.forEach((ul) => ul.classList.remove('show'))
  }

  const onclickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.nextElementSibling?.classList.toggle('show')
  }

  const activeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = e.currentTarget

    if (!el.classList.contains('show')) {
      el.parentElement
        ?.querySelectorAll('button')
        .forEach((btn) => btn.classList.remove('show'))

      menuRef.current
        .querySelectorAll('.show')
        .forEach((item) => item.classList.remove('show'))
      setCurrentactive(!currentactive)
    }

    el.classList.add('show')
  }

  const menuLinkClickHandler = () => {
    document
      .querySelector('.header__menu')
      ?.classList.remove('header__menu--show')

    menuRef.current
      .querySelectorAll('.show')
      .forEach((item) => item.classList.remove('show'))

    dispatch(showMobileMenu(false))
  }

  return (
    <div
      className={`header-menu  ${selector.mobileMenuActive && 'header-menu__show--menu'}`}>
      <div className="header-menu__top">
        <Button className="show" onClick={activeHandler}>
          Shop
        </Button>
        <Button onClick={activeHandler}>Signin/Register</Button>
      </div>

      <div
        className={`header-menu__active-buffer ${currentactive && 'show--login'}`}>
        <Link href="/login" onClick={menuLinkClickHandler}>
          sign In
        </Link>

        <Link href="/signup" onClick={menuLinkClickHandler}>
          sign Up
        </Link>
      </div>

      <ul ref={menuRef}>
        {navigationLinksData.map((data, index) => {
          return (
            <ul className={`header-menu__menu menu${index}`} key={index}>
              {data.map((item, index1) => {
                return typeof item === 'string' ? (
                  <li
                    key={index1}
                    className="header-menu__menu-category"
                    onClick={onclickHandler}>
                    {item}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="26"
                      height="26">
                      <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
                    </svg>
                  </li>
                ) : (
                  <ul key={index1} className="header-menu__category-list">
                    <div
                      className="header-menu__route"
                      onClick={hideMenuTreeHandler}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="26"
                        height="26">
                        <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                      </svg>

                      <span>{data[0]}</span>
                    </div>
                    {item.map((item2, index2) => {
                      return typeof item2 === 'string' ? (
                        <li key={index2}>{item2}</li>
                      ) : (
                        item2?.map((item3, index3) => {
                          return (
                            typeof item3 === 'string' && (
                              <li className="header-menu__list" key={index3}>
                                <Link
                                  href={item3}
                                  onClick={menuLinkClickHandler}>
                                  {item3}
                                </Link>
                              </li>
                            )
                          )
                        })
                      )
                    })}
                  </ul>
                )
              })}
            </ul>
          )
        })}
      </ul>
    </div>
  )
}

export default HeaderMenu
