import { CartProduct } from "@/components/Pages/Cart/Cart.types";
import { User } from "@/context/Data.types";
import { getCartProducts } from "@/context/Utils";
import { RootState } from "@/context/store";
import { supabase } from "@/supabase/supabase";
import {
  PostgrestSingleResponse,
  User as UserSupa,
} from "@supabase/supabase-js";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const useGetCartProducts = (cartProducts: CartProduct[]) => {
  const logged = useSelector((state: RootState) => state.data.logged);
  const dispatch = useDispatch();
  const [cart, setCart] = React.useState<CartProduct[]>(cartProducts);
  const [error, setError] = React.useState<string>("");
  const [user, setUser] = useState<UserSupa>();

  const cb = async () => {
    try {
      if (logged && !cartProducts.length) {
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
            dispatch(getCartProducts(data[0].user_cart));
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

  return { cart, setCart, error, user } as const;
};
export default useGetCartProducts;
