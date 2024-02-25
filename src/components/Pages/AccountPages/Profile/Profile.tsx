import React from 'react'
import { Button, Link, OrderCard } from '@/components/UI'
import { BadgeInfo } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/context/store'
import { CartProduct } from '../..'

const needHelpNavigation = [
  'Contact customer service',
  'Return & Refund',
  'Delivery information'
]

const Profile = () => {
  const route = useNavigate()
  const userSession = useSelector((state: RootState) => state.user.userSession)
  const userData = useSelector((state: RootState) => state.user.userData)

  const needHelp = true

  return (
    <div className="account__profile">
      <h1>My Account</h1>

      <div className="account__profile__recent">
        <h2>Recent work</h2>
        <Button
          variant={'default'}
          onClick={() => {
            window.scrollTo(0, 0)
            route('/account/contact-details')
          }}>
          Edit Account details
        </Button>
      </div>
      <div className="account__profile__orders">
        <ul>
          {userData?.user_cart.length! < 1 ? (
            <span>You have no recent orders to display.</span>
          ) : (
            userData?.user_cart.map((item: CartProduct) => (
              <OrderCard key={item.id + Math.random()} item={item} />
            ))
          )}
        </ul>
        <Button
          onClick={() => {
            window.scrollTo(0, 0)
            route('/')
          }}>
          Go shopping
        </Button>
      </div>

      {needHelp && (
        <div className="account__profile__need">
          <div>
            <BadgeInfo />
            <h2>Need help with your order?</h2>
          </div>
          <div>
            {needHelpNavigation.map((item) => (
              <Link key={item} href="/">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="account__profile__details">
        <h2>Account details</h2>
        <div>
          <h3>email address</h3>
          <span>{userSession?.email}</span>
        </div>
      </div>
    </div>
  )
}

export default Profile
