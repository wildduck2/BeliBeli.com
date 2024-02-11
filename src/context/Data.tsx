import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../supabase/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import {
  BannersType,
  Product,
  initialStateTypes,
  otherImgsTypes,
} from "./Data.types";
import { toast } from "sonner";

const initialState: initialStateTypes = {
  satatus: "loading",
  error: null,

  bannersData: null,
  categoriesData: null,
  products: null,
  userData: null,
  logged: JSON.parse(localStorage.getItem("userData") || "false"),
};

export const thunkFetchingBannerFromSupabase = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      // getting banners
      const {
        data: banners,
        error: bannerError,
      }: PostgrestSingleResponse<BannersType[]> = await supabase
        .from("banners")
        .select("*");

      // getting categories
      const {
        data: categories,
        error: categoryError,
      }: PostgrestSingleResponse<otherImgsTypes[]> = await supabase
        .from("categories")
        .select("*");

      // getting categories
      const {
        data: products,
        error: productsError,
      }: PostgrestSingleResponse<otherImgsTypes[]> = await supabase
        .from("products")
        .select("*, products_reviews(*)");

      // checking if any error log that
      if (!bannerError || !categoryError || !productsError) {
        return { banners, categories, products };
      } else {
        console.log(bannerError, categoryError, productsError);
      }
    } catch (error: string | unknown) {
      throw new Error(error as string);
    }
  },
);

export const dataSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getUserDispatch: (state, action) => {
      state.logged = true;
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(state.logged));
    },
    signin: (state) => {
      state.logged = true;
      localStorage.setItem("userData", JSON.stringify(state.logged));
    },
    signout: (state) => {
      state.logged = false;
      state.userData = null;
      localStorage.setItem("userData", JSON.stringify(state.logged));
      toast.info("Logout Successful");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(thunkFetchingBannerFromSupabase.pending, (state) => {
        state.satatus = "loading";
      })
      .addCase(thunkFetchingBannerFromSupabase.fulfilled, (state, action) => {
        state.satatus = "succeeded";

        //  Getting the banners from the data
        state.bannersData = action.payload?.banners as BannersType[];

        //  Getting the categoryies from the data
        state.categoriesData = action.payload?.categories as otherImgsTypes[];

        //  Getting the priducts from the data
        state.products = action.payload?.products as Product[] | null;
      })

      .addCase(thunkFetchingBannerFromSupabase.rejected, (state, action) => {
        state.satatus = "failed";
        state.error = action.error.message as string;
      });
  },
});

export const { getUserDispatch, signin, signout } = dataSlice.actions;
export default dataSlice.reducer;
