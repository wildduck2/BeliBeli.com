import { UUID } from 'crypto';

export interface CartProduct {
  id: number;
  name: string;
  price: number;
  discount: number;
  img: string;
  artNo: string;
  color: string;
  size: string;
  quantity: number;
}

export interface CartProductProps {
  item: CartProduct;
  user_id: UUID;
}

export interface handleQuantityChange {
  index: number;
  newQuantity: number;
}
