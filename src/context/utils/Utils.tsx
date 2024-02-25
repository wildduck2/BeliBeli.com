import { createSlice } from '@reduxjs/toolkit'
import { updateCartProductsFunc } from '@/utils'
import { InitStateTypes } from '.'

const initialState: InitStateTypes = {
  mobileMenuActive: false,
  inputsValid: {
    email: false,
    password: false,
    passwordcomfirmation: false
  },
  emailisnotvalid: false,
  userReveiws: []
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
    }
  }
})

export default utilSlice.reducer

export const { showMobileMenu, checkInputsValid, emailisnotvalid } =
  utilSlice.actions
