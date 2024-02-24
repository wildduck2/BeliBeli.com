import React from 'react'
import { RootState } from '@/context/store'
import { HiOutlineHeart } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HeaderFavouriteProducts = () => {
  const userData = useSelector((state: RootState) => state.user.userData)
  const route = useNavigate()

  return (
    <div>
      <HiOutlineHeart size={27} onClick={() => route('/home/wishlist')} />
      {userData?.favourite_products.length! > 0 && (
        <span>{userData?.favourite_products.length}</span>
      )}
    </div>
  )
}

export default HeaderFavouriteProducts
