import { CartProduct } from '@/components/Pages/Cart/Cart.types';
import { updateCartProducts } from '@/context/Utils';
import { UUID } from 'crypto';
import { AnyAction, Dispatch } from 'redux';

export interface handleQuantityChangeProps {
  newQuantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  dispatch: Dispatch<AnyAction>;
  item: CartProduct;
  user_id: UUID;
}

export const handleQuantityChange = ({
  dispatch,
  setQuantity,
  newQuantity,
  item,
  user_id
}: handleQuantityChangeProps) => {
  setQuantity(newQuantity);
  dispatch(
    updateCartProducts({ product: item, quantity: newQuantity, user_id })
  );
};
