import { createSlice } from "@reduxjs/toolkit";

interface InitStateTypes {
  mobileMenuActive: boolean;
}

const initialState: InitStateTypes = {
  mobileMenuActive: false,
};

export const utilSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    showMobileMenu: (state, actions) => {
      state.mobileMenuActive = actions.payload;
      console.log(state.mobileMenuActive);
    },
  },
});

export default utilSlice.reducer;

export const { showMobileMenu } = utilSlice.actions;
