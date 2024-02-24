import { createSlice } from '@reduxjs/toolkit'
import { updateCartProductsFunc } from '@/utils'

import { InitStateTypes } from './Utils.types'

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
          (item) => item.art_no === action.payload.product.art_no
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
        state.cartProducts = [...state.cartProducts, action.payload.product]
      }
    },
    removeProductCart: (state, action) => {
      if (action.payload) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.art_no !== action.payload.product.art_no
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
        state.favouriteProducts = [
          ...state.favouriteProducts,
          action.payload.product
        ]
      }
    },
    removeProductFavorite: (state, action) => {
      if (action.payload) {
        state.favouriteProducts = state.favouriteProducts.filter(
          (item) =>
            item.product_type.art_no !==
            action.payload.product.product_type.art_no
        )
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
