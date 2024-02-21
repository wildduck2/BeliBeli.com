import { RootState } from '@/context/store';
import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HeaderShoppingCard = () => {
  const route = useNavigate();
  const cartProducts = useSelector(
    (state: RootState) => state.util.cartProducts
  );

  return (
    <div>
      <AiOutlineShopping size={27} onClick={() => route('/home/cart')} />
      {cartProducts.length > 0 && <span>{cartProducts.length}</span>}
    </div>
  );
};

export default HeaderShoppingCard;
