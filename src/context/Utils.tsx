import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { PushProductCart } from "@/utils";
import { CartProduct } from "@/components/Pages/Cart/Cart.types";

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
      console.log(state.mobileMenuActive);
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
    addProductToCart: (state, action) => {
      if (action.payload) {
        if (state.cartProducts.find((item) => item.id === action.payload.id)) {
          console.log("already in cart");
          toast.error("Product already in cart");
        } else {
          state.cartProducts.push(action.payload);
          PushProductCart(action.payload);
        }
      }
    },
  },
});

export default utilSlice.reducer;

export const {
  showMobileMenu,
  checkInputsValid,
  emailisnotvalid,
  addProductToCart,
} = utilSlice.actions;
