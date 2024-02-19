import React, { useEffect, useState } from "react";
import { Button, DeliverToWrapper, Input, ScrollArea } from "@/components/UI";
import { useLocation } from "react-router-dom";
import { recover } from "@/assets";
import { AsyncImage } from "loadable-image";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CartProduct, CartProductProps } from "./Cart.types";
import { formatter, updateQuantity } from "@/utils";
import { RootState } from "@/context/store";
import { useSelector } from "react-redux";
import { supabase } from "@/supabase/supabase";
import { toast } from "sonner";
import {
  PostgrestSingleResponse,
  User as UserSupa,
} from "@supabase/supabase-js";
import { User } from "@/context/Data.types";

const steps = ["Bag", "Delivery and Payment", "Confirmation"];

export interface useGetCartProducts {
  user_id: string | undefined;
}

const useGetCartProducts = () => {
  const cartProductsLocal = JSON.parse(localStorage.getItem("cartProducts")!);
  const logged = useSelector((state: RootState) => state.data.logged);
  const [cart, setCart] = React.useState<CartProduct[]>(cartProductsLocal);
  const [error, setError] = React.useState<string>("");
  const [user, setUser] = useState<UserSupa>();

  console.log(cartProductsLocal);
  const cb = async () => {
    try {
      if (logged && cartProductsLocal === null) {
        const { data: user, error: userError } = await supabase.auth.getUser();

        if (userError) {
          toast.error("You are not logged in");
          throw new Error(userError.message);
        } else {
          setUser(user.user);

          const { data, error } = (await supabase
            .from("users")
            .select("user_cart")
            .eq("id", user.user?.id)) as PostgrestSingleResponse<User[]>;

          if (data) {
            localStorage.setItem(
              "cartProducts",
              JSON.stringify(data[0].user_cart),
            );
            setCart(data[0].user_cart);
          } else {
            toast.error("Faild to get cart");
            setError(error.message);
          }
        }
      }
    } catch (error) {
      toast.error("Faild to get cart");
      throw new Error(error as string);
    }
  };

  useEffect(() => {
    cb();
  }, []);

  return { cart, error, user } as const;
};

const Cart = () => {
  const location = useLocation();
  const logged = useSelector((state: RootState) => state.data.logged);
  const { cart: carts, error, user } = useGetCartProducts();
  const cartProductsLocal = JSON.parse(localStorage.getItem("cartProducts")!);
  const cartProducts = useSelector(
    (state: RootState) => state.util.cartProducts,
  );

  const [totalPrice, setTotalPrice] = React.useState(0);
  const [cart, setCart] = React.useState<CartProduct[]>(
    cartProductsLocal || cartProducts || carts,
  );

  React.useEffect(() => {
    setCart(carts);
    localStorage.setItem("cartProducts", JSON.stringify(carts));
    if (cart) {
      const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      setTotalPrice(total);
    }
  }, [cart, carts]);

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

      {cart && logged && user !== null ? (
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
                {cart.map((item, index) => (
                  <CartProductComponent
                    key={index}
                    item={item}
                    index={index}
                    updateQuantity={updateQuantity}
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

const CartProductComponent = ({
  item,
  index,
  updateQuantity,
  setCart,
}: CartProductProps) => {
  const [quantity, setQuantity] = React.useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    updateQuantity(index, newQuantity, setCart);
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
        <Button variant={"destructive"}>
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
