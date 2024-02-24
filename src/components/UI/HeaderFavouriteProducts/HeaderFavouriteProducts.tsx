import React from 'react'
import { RootState } from '@/context/store'
import { HiOutlineHeart } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HeaderFavouriteProducts = () => {
  const favouriteProducts = useSelector(
    (state: RootState) => state.util.favouriteProducts
  )
  const route = useNavigate()

  return (
    <div>
      <HiOutlineHeart size={27} onClick={() => route('/home/wishlist')} />
      {favouriteProducts.length > 0 && <span>{favouriteProducts.length}</span>}
    </div>
  )
}

export default HeaderFavouriteProducts
