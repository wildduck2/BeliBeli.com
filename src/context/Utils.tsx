import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { PushProductCart, updateCartProductsFunc } from "@/utils";
import { CartProduct } from "@/components/Pages/Cart/Cart.types";
import { supabase } from "@/supabase/supabase";

export interface InitStateTypes {
  mobileMenuActive: boolean;
  inputsValid: Record<string, boolean>;
  emailisnotvalid: boolean;
  cartProducts: CartProduct[];
}

const initialState: InitStateTypes = {
  mobileMenuActive: false,
  inputsValid: {
    email: false,
    password: false,
    passwordcomfirmation: false,
  },
  cartProducts: [],
  emailisnotvalid: false,
};

export const utilSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    showMobileMenu: (state, actions) => {
      state.mobileMenuActive = actions.payload;
    },
    checkInputsValid: (state, action) => {
      if (action.payload) {
        state.inputsValid = action.payload;
      }
    },
    emailisnotvalid: (state, action) => {
      if (action.payload) {
        state.emailisnotvalid = action.payload;
      }
    },
    getCartProducts: (state, action) => {
      state.cartProducts = action.payload;
    },
    updateCartProducts: (state, action) => {
      if (action.payload) {
        state.cartProducts!.find(
          (item) => item.id === action.payload.product.id,
        )!.quantity = action.payload.quantity;

        updateCartProductsFunc({
          allProducts: state.cartProducts,
          product: action.payload.product,
          user_id: action.payload.user_id,
          quantity: action.payload.quantity,
        });
      }
    },
    addProductToCart: (state, action) => {
          state.cartProducts = [...state.cartProducts, action.payload];
      if (action.payload) {
        if (state.cartProducts.find((item) => item.id === action.payload.id)) {
          toast.error("Product already in cart");
        } else {
          state.cartProducts = [...state.cartProducts, action.payload];
          // PushProductCart({ products: state.cartProducts });
        }
      }
    },
    removeProductCart: (state, action) => {
      if (action.payload) {
        
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== action.payload.product.id
        );
                      
        console.log(
          state.cartProducts.findIndex(
            (item) => item.id === action.payload.product.id,
          ),
          1,
        );
      }
    },
  },
});

export default utilSlice.reducer;

export const {
  showMobileMenu,
  checkInputsValid,
  emailisnotvalid,
  getCartProducts,
  updateCartProducts,
  addProductToCart,
  removeProductCart,
} = utilSlice.actions;
