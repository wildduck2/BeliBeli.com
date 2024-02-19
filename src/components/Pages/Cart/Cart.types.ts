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
  updateQuantity: (
    index: number,
    newQuantity: number,
    setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>,
  ) => void;
  index: number;
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

export interface handleQuantityChange {
  index: number;
  newQuantity: number;
}
