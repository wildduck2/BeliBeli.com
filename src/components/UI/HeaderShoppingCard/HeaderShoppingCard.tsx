import React from 'react'
import { RootState } from '@/context/store'
import { AiOutlineShopping } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HeaderShoppingCard = () => {
  const route = useNavigate()
  const userData = useSelector((state: RootState) => state.user.userData)

  return (
    <div>
      <AiOutlineShopping size={27} onClick={() => route('/home/cart')} />
      {userData?.user_cart?.length! > 0 && (
        <span>{userData?.user_cart?.length}</span>
      )}
    </div>
  )
}

export default HeaderShoppingCard
