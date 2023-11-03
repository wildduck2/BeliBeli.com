import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../supabase/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

export interface ProductSize {
  size: string;
  price: string;
  discount: string | null;
}

export interface ProductVariation {
  top_imgs: ProductImage;
  low_imgs: ProductImage;
  sizes: ProductSize[];
  art_no: string;
  name: string;
}

export interface Product {
  type: string;
  trending: boolean;
  choosen: boolean;
  liked: boolean;
  title: string;
  description: string;
  price: string;
  discount: string;
  product_type: ProductVariation[];
}

export interface otherImgsTypes {
  id: number;
  created_at: Date;
  title: string | null;
  tag: string | null;
  name: string | null;
  type: string | null;
  subtitle: string | null;
  button: string[] | null;
  index: number;
  category_type: string | null;
  top_img: string;
  low_img: string;
}

export interface initialStateTypes {
  currentFilter: string;
  satatus: "loading" | "succeeded" | "failed";
  error: string | null;

  bannersData: otherImgsTypes[] | null;
  categoriesData: otherImgsTypes[] | null;
  products: Product[] | null;
}

const initialState: initialStateTypes = {
  currentFilter: "women",
  satatus: "loading",
  error: null,

  bannersData: null,
  categoriesData: null,
  products: null,
};

export const thunkFetchingBannerFromSupabase = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      // getting banners
      const {
        data: banners,
        error: bannerError,
      }: PostgrestSingleResponse<otherImgsTypes[]> = await supabase
        .from("banners")
        .select("*");

      // getting categories
      const {
        data: categories,
        error: categoryError,
      }: PostgrestSingleResponse<otherImgsTypes[]> = await supabase
        .from("other_imgs")
        .select("*");

      // getting categories
      const {
        data: products,
        error: productsError,
      }: PostgrestSingleResponse<otherImgsTypes[]> = await supabase
        .from("products")
        .select("*");

      console.log(products);

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
    gettingFilterName: (state, actions) => {
      state.currentFilter = actions.payload;
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
        state.bannersData = action.payload?.banners as otherImgsTypes[];

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

export const { gettingFilterName } = dataSlice.actions;

export default dataSlice.reducer;

interface ProductImage {
  [key: string]: string;
}
