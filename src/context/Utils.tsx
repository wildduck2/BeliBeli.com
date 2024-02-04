import { createSlice } from "@reduxjs/toolkit";

export interface InitStateTypes {
  mobileMenuActive: boolean;
  inputsValid: Record<string, boolean>;

  emailisnotvalid: boolean;
}

const initialState: InitStateTypes = {
  mobileMenuActive: false,
  inputsValid: {
    email: false,
    password: false,
    passwordcomfirmation: false,
  },

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
  },
});

export default utilSlice.reducer;

export const { showMobileMenu, checkInputsValid, emailisnotvalid } =
  utilSlice.actions;
