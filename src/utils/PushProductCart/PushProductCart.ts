import { CartProduct } from "@/components/Pages/Cart/Cart.types";
import { User } from "@/context/Data.types";
import { supabase } from "@/supabase/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { toast } from "sonner";

const PushProductCart = async (product: CartProduct[]) => {
  const promise = new Promise((resolve, reject) => {
    const cb = async () => {
      try {
        const { data: user, error: usererror } = await supabase.auth.getUser();

        if (usererror) {
          reject(usererror);
          return;
        } else {
          const { data: currentCart, error: currentCartError } = (await supabase
            .from("users")
            .select("user_cart")
            .eq("id", user.user.id)) as PostgrestSingleResponse<User[]>;

          if (currentCartError) {
            reject(usererror);
            return;
          } else {
            if (
              currentCart![0].user_cart?.find(
                (item) => item.id === product[0].id,
              )
            ) {
              toast.error("Product already in cart");
              reject(usererror);
            } else {
              const finalCart = [
                ...(currentCart![0].user_cart || []),
                product[0],
              ];

              const { data, error } = (await supabase
                .from("users")
                .update({
                  user_cart: finalCart,
                })
                .eq("id", user.user.id)
                .select()) as PostgrestSingleResponse<User[]>;

              if (error) {
                reject(usererror);
                throw new Error("something went wrong");
              } else {
                resolve(data![0].user_cart);
              }
            }
          }
        }
      } catch (error) {
        throw new Error("something went wrong");
      }
    };

    cb();
  });

  toast.promise(promise, {
    success: "Product added to cart!",
    loading: "Adding product to cart...",
    error: "Something went wrong!",
  });
};

export default PushProductCart;
