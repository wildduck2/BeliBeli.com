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
  id: number;
  type: string;
  title: string;
  description: string;
  product_type: ProductVariation[];
  product_review: string;
  treding: boolean;
}

export interface otherImgsTypes {
  id: number;
  created_at: Date;
  page__name: string;
  name: string[];
  category: string[];
  category__img__high: string[];
  category__img__low: string[];
}

export interface BannersType {
  id: number;
  created_at: Date;
  title: string[];
  subtitle: string;
  top_img: string;
  low_img: string;
  mobile_top_img: string;
  mobile_low_img: string;
  button: string[];
}

export interface initialStateTypes {
  satatus: "loading" | "succeeded" | "failed";
  error: string | null;

  bannersData: BannersType[] | null;
  categoriesData: otherImgsTypes[] | null;
  products: Product[] | null;
}

const initialState: initialStateTypes = {
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
        .select("*");

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
  reducers: {},
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

export default dataSlice.reducer;

interface ProductImage {
  [key: string]: string;
}
