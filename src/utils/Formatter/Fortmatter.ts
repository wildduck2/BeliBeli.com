export const formatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const updateQuantity = (
  index: number,
  newQuantity: number,
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>,
) => {
  setCart((prevCart) => {
    const newCart = [...prevCart];
    newCart[index].quantity = newQuantity;
    return newCart;
  });
};
