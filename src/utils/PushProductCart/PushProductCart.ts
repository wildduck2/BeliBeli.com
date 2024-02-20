import { CartProduct } from "@/components/Pages/Cart/Cart.types";
import { User } from "@/context/Data.types";
import { supabase } from "@/supabase/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { toast } from "sonner";

export interface PushProductCartProps {
  products: CartProduct[];
}
const PushProductCart = async ({ products }: PushProductCartProps) => {
  const promise = new Promise((resolve, reject) => {
    const cb = async () => {
      try {
        const { data: user, error: usererror } = await supabase.auth.getUser();

        if (usererror) {
          reject(usererror);
          return;
        } else {
          const { data, error } = (await supabase
            .from("users")
            .update({
              user_cart: products,
            })
            .eq("id", user.user.id)
            .select()) as PostgrestSingleResponse<User[]>;

          if (error) {
            reject(usererror);
            throw new Error("Failed to add product to cart");
          } else {
            console.log(products);
            localStorage.setItem("cartProducts", JSON.stringify(products));
            resolve(data![0].user_cart);
          }
        }
      } catch (error) {
        throw new Error("something went wrong in adding product to cart");
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

export { PushProductCart };

export interface UpdateCartProductsProps {
  allProducts: CartProduct[];
  product: CartProduct;
  user_id: string;
  quantity: number;
}

const updateCartProductsFunc = async ({
  allProducts,
  product,
  user_id,
  quantity,
}: UpdateCartProductsProps) => {
  try {
    const { data: currentData, error: currentError } = (await supabase
      .from("users")
      .select("*")
      .eq("id", user_id)) as PostgrestSingleResponse<User[]>;

    // console.log(allProducts);

    // const index = currentData![0].user_cart.find(
    //   (item) => item.id === product.id && quantity,
    // );

    const finalData = currentData![0].user_cart.map((item) => {
      if (item.id === product.id) {
        item.quantity = quantity;
        return item;
      } else {
        return item;
      }
    });

    const { data: updatedData, error: updateError } = (await supabase
      .from("users")
      .update({ user_cart: finalData })
      .eq("id", user_id)
      .select()) as PostgrestSingleResponse<User[]>;

    if (updateError) {
      throw new Error("deez nuts");
    } else {
      console.log(updatedData[0].user_cart);
    }
  } catch (error) {
    throw new Error("something went wrong in adding product to cart");
  }
};
export { updateCartProductsFunc };
