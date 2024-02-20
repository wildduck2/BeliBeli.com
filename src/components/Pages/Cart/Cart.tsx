import React from "react";
import { useLocation } from "react-router-dom";
import { RootState } from "@/context/store";
import { useDispatch, useSelector } from "react-redux";
import { AsyncImage } from "loadable-image";
import { Button, DeliverToWrapper, Input, ScrollArea } from "@/components/UI";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CartProductProps } from "./Cart.types";
import { RemoveProductCart, formatter } from "@/utils";
import { recover } from "@/assets";
import { useGetCartProducts } from "@/hooks";
import { updateCartProducts } from "@/context/Utils";

const steps = ["Bag", "Delivery and Payment", "Confirmation"];

const Cart = () => {
  const location = useLocation();
  const logged = useSelector((state: RootState) => state.data.logged);
  const cartProducts = useSelector(
    (state: RootState) => state.util.cartProducts,
  );
  const { cart, setCart, error, user } = useGetCartProducts(cartProducts);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    if (cartProducts) {
      const total = cartProducts.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      setTotalPrice(total);
    }
  }, [cartProducts]);

  return (
    <main className="cart">
      <span>
        {location.pathname.split("/").map((item, index) => {
          return (
            <React.Fragment key={index}>
              <span>{item}</span>
              {index < location.pathname.split("/").length - 1 && index > 0 && (
                <span>/</span>
              )}
            </React.Fragment>
          );
        })}
      </span>

      {cartProducts && cartProducts.length && logged && user !== null ? (
        <div className="cart__wrapper">
          <div className="cart__wrapper__verify-steps">
            <div>
              {steps.map((item, i) => (
                <div key={i}>
                  <div
                    className={`cart__wrapper__verify-steps__step ${
                      i === 0 && "active"
                    }`}
                  >
                    <span>{i + 1}</span>

                    <h4>{item}</h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart__wrapper__verify-steps__line"></div>
          </div>

          <section className="cart__wrapper__products">
            <div className="cart__wrapper__products__info">
              <div>
                <h4>my shopping bag ({Cart.length} items)</h4>
                <DeliverToWrapper />
              </div>
              <div>
                <img src={recover} alt="recover img " />

                <h4>
                  <span>FREE Returns</span>
                  Now Available Online!
                </h4>
              </div>

              <ScrollArea className="cart__wrapper__products__info__scroll">
                {cartProducts.map((item, index) => (
                  <CartProductComponent
                    key={index}
                    item={item}
                    index={index}
                    setCart={setCart}
                  />
                ))}
              </ScrollArea>
            </div>
            <div className="cart__wrapper__products__summary">
              <h4>Do you have a Promotional Code?</h4>
              <div className="cart__wrapper__products__summary__input">
                <Input placeholder="Enter code" type="number" min={0} />
                <Button variant={"default"}>Apply</Button>
              </div>

              <div className="cart__wrapper__products__summary__total">
                <h5>Order Summary </h5>

                <div>
                  <span>subtotal</span>
                  <span>EGP {formatter.format(totalPrice)}</span>
                </div>
                <div>
                  <span>Order Total</span>
                  <span>EGP {formatter.format(totalPrice)}</span>
                </div>
                <div>
                  <span>Excluding delivery</span>
                  <span>Inclusive of VAT</span>
                </div>

                <Button variant={"default"}>CONTINUE TO CHECKOUT</Button>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="cart__wrapper__empty">
          <p>Your shopping bag is empty.</p>
          <Button variant="default">Go shopping</Button>
        </div>
      )}
    </main>
  );
};

export default Cart;

const CartProductComponent = ({ item, index, setCart }: CartProductProps) => {
  const [quantity, setQuantity] = React.useState(item.quantity);
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].quantity + 1;
      return newCart;
    });
    dispatch(updateCartProducts({ product: item, quantity: newQuantity }));
  };

  return (
    <li>
      <div>
        <AsyncImage
          style={{
            width: 155,
            height: 230,
            objectFit: "contain",
          }}
          src={item.img}
          alt={item.name}
        />

        <div>
          <h4>{item.name}</h4>

          <h5>Price: EGP {formatter.format(item.price)}</h5>

          <span>Art. no: {item.artNo}</span>
          <span>Color: {item.color}</span>
          <span>Size: {item.size}</span>

          <Button variant={"link"}>Move to Favourite</Button>
        </div>
      </div>

      <div>
        <Button
          variant={"destructive"}
          onClick={() => {
            // dispatch(removeProductCart({ product: item }));
            RemoveProductCart({
              product: item,
              dispatch,
            });
          }}
        >
          <MdOutlineDeleteOutline size={23} />
        </Button>

        <div>
          <Button
            variant={"secondary"}
            onClick={() =>
              handleQuantityChange(quantity > 1 ? quantity - 1 : 1)
            }
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            variant={"default"}
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>
    </li>
  );
};
