import { createSlice } from '@reduxjs/toolkit'
import { userSliceType } from '.'
import { toast } from 'sonner'
import { updateCartProductsFunc } from '@/utils'

const initialState: userSliceType = {
  userData: null,
  userSession: null,
  userLogged: JSON.parse(localStorage.getItem('userLogged') || 'false')
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.userData = action.payload
      state.userLogged = true
    },
    getUserSession: (state, action) => {
      state.userSession = action.payload
    },
    getUserDispatch: (state, action) => {
      state.userData = action.payload
      localStorage.setItem('userLogged', JSON.stringify(state.userLogged))
    },
    signin: (state) => {
      state.userLogged = true
      localStorage.setItem('userLogged', JSON.stringify(state.userLogged))
    },
    signout: (state) => {
      state.userLogged = false
      state.userData = null
      localStorage.setItem('userLogged', JSON.stringify(state.userLogged))
      toast.info('Logout Successful')
    },

    getCartProducts: (state, action) => {
      if (action.payload) {
        state.userData!.user_cart = action.payload
      }
    },
    updateCartProducts: (state, action) => {
      if (action.payload) {
        state.userData!.user_cart!.find(
          (item) => item.art_no === action.payload.product.art_no
        )!.quantity = action.payload.quantity

        updateCartProductsFunc({
          allProducts: state.userData!.user_cart!,
          product: action.payload.product,
          user_id: action.payload.user_id,
          quantity: action.payload.quantity
        })
      }
    },
    addProductToCart: (state, action) => {
      if (action.payload) {
        state.userData!.user_cart = [
          ...state.userData!.user_cart,
          action.payload.product
        ]
      }
    },
    removeProductCart: (state, action) => {
      if (action.payload) {
        state.userData!.user_cart = state.userData!.user_cart.filter(
          (item) => item.art_no !== action.payload.product.art_no
        )
      }
    },
    getFavoriteProducts: (state, action) => {
      if (action.payload) {
        state.userData!.favourite_products = action.payload
      }
    },
    addProductToFavorite: (state, action) => {
      if (action.payload) {
        state.userData!.favourite_products = [
          ...state.userData!.favourite_products,
          action.payload.product
        ]
      }
    },
    removeProductFavorite: (state, action) => {
      if (action.payload) {
        state.userData!.favourite_products =
          state.userData!.favourite_products.filter(
            (item) =>
              item.product_type.art_no !==
              action.payload.product.product_type.art_no
          )
      }
    }
  }
})

export const {
  getUserData,
  getUserSession,
  getUserDispatch,
  signin,
  signout,
  addProductToCart,
  removeProductCart,
  getCartProducts,
  updateCartProducts,
  getFavoriteProducts,
  addProductToFavorite,
  removeProductFavorite
} = userSlice.actions
export default userSlice.reducer
