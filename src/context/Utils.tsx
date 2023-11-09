import { createSlice } from "@reduxjs/toolkit";


interface InitStateTypes {

  currentFilter: string,
  mobileMenuActive: boolean
}

const initialState: InitStateTypes = {
  currentFilter: "women",
  mobileMenuActive: false
};

export const utilSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    gettingFilterName: (state, actions) => {
      state.currentFilter = actions.payload;
    },
    showMobileMenu: (state, actions) => {
      state.mobileMenuActive = actions.payload
      console.log(state.mobileMenuActive)
    }
  },
})

export default utilSlice.reducer;

export const { gettingFilterName, showMobileMenu } = utilSlice.actions;
