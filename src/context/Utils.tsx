import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'
import { CartProduct } from '@/components/Pages/Cart/Cart.types'
import {
  PushProductCart,
  PushProductFavorite,
  updateCartProductsFunc
} from '@/utils'
import { FavouritesProduct } from '@/components/Pages/WishList/WishList.types'

export interface InitStateTypes {
  mobileMenuActive: boolean
  inputsValid: Record<string, boolean>
  emailisnotvalid: boolean
  cartProducts: CartProduct[]
  favouriteProducts: FavouritesProduct[]
}

const initialState: InitStateTypes = {
  mobileMenuActive: false,
  inputsValid: {
    email: false,
    password: false,
    passwordcomfirmation: false
  },
  emailisnotvalid: false,
  cartProducts: [],
  favouriteProducts: []
}

export const utilSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    showMobileMenu: (state, actions) => {
      state.mobileMenuActive = actions.payload
    },
    checkInputsValid: (state, action) => {
      if (action.payload) {
        state.inputsValid = action.payload
      }
    },
    emailisnotvalid: (state, action) => {
      if (action.payload) {
        state.emailisnotvalid = action.payload
      }
    },
    getCartProducts: (state, action) => {
      if (action.payload) {
        state.cartProducts = action.payload
      }
    },
    updateCartProducts: (state, action) => {
      if (action.payload) {
        state.cartProducts!.find(
          (item) => item.artNo === action.payload.product.artNo
        )!.quantity = action.payload.quantity

        updateCartProductsFunc({
          allProducts: state.cartProducts,
          product: action.payload.product,
          user_id: action.payload.user_id,
          quantity: action.payload.quantity
        })
      }
    },
    addProductToCart: (state, action) => {
      if (action.payload) {
        if (
          state.cartProducts.find((item) => item.artNo === action.payload.artNo)
        ) {
          toast.error('Product already in cart')
        } else {
          state.cartProducts = [...state.cartProducts, action.payload]
          PushProductCart({ products: state.cartProducts })
        }
      }
    },
    removeProductCart: (state, action) => {
      if (action.payload) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.artNo !== action.payload.product.artNo
        )
      }
    },
    getFavoriteProducts: (state, action) => {
      if (action.payload) {
        state.favouriteProducts = action.payload
      }
    },
    addProductToFavorite: (state, action) => {
      if (action.payload) {
        if (
          state.favouriteProducts.find(
            (item) =>
              item.product_type.art_no === action.payload.product_type.art_no
          )
        ) {
          toast.error('Product already in Favorites')
        } else {
          state.favouriteProducts = [...state.favouriteProducts, action.payload]
          PushProductFavorite({ favourite_products: state.favouriteProducts })
        }
      }
    },
    removeProductFavorite: (state, action) => {
      if (action.payload) {
        state.favouriteProducts = state.favouriteProducts.filter(
          (item) =>
            item.product_type.art_no !==
            action.payload.product.product_type.art_no
        )
        console.log(action.payload.product.product_type.art_no)
      }
    }
  }
})

export default utilSlice.reducer

export const {
  showMobileMenu,
  checkInputsValid,
  emailisnotvalid,
  getCartProducts,
  getFavoriteProducts,
  updateCartProducts,
  addProductToCart,
  addProductToFavorite,
  removeProductCart,
  removeProductFavorite
} = utilSlice.actions
