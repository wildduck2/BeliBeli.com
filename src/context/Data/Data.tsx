import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PostgrestSingleResponse } from '@supabase/supabase-js'
import {
  BannersType,
  DataSliceTypes,
  Product,
  otherImgsTypes,
  styled_by_you
} from './Data.types'
import { supabase } from '@/supabase'

const initialState: DataSliceTypes = {
  satatus: 'loading',
  error: null,
  bannersData: null,
  categoriesData: null,
  products: null,
  styled_by_you: null
}

export const thunkFetchingFromSupabase = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      // getting banners
      const {
        data: banners,
        error: bannerError
      }: PostgrestSingleResponse<BannersType[]> = await supabase
        .from('banners')
        .select('*')

      // getting categories
      const {
        data: categories,
        error: categoryError
      }: PostgrestSingleResponse<otherImgsTypes[]> = await supabase
        .from('categories')
        .select('*')

      // getting Products
      const {
        data: products,
        error: productsError
      }: PostgrestSingleResponse<otherImgsTypes[]> = await supabase
        .from('products')
        .select('*')

      // getting styled_by_you
      const { data: styled_by_you, error: styled_by_you_error } =
        (await supabase
          .from('styled_by_you')
          .select('*')) as PostgrestSingleResponse<styled_by_you[]>

      // checking if any error log that
      if (
        !bannerError ||
        !categoryError ||
        !productsError ||
        !styled_by_you_error
      ) {
        return { banners, categories, products, styled_by_you }
      } else {
        console.log(
          bannerError,
          categoryError,
          productsError,
          styled_by_you_error
        )
      }
    } catch (error: string | unknown) {
      throw new Error(error as string)
    }
  }
)

export const dataSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(thunkFetchingFromSupabase.pending, (state) => {
        state.satatus = 'loading'
      })
      .addCase(thunkFetchingFromSupabase.fulfilled, (state, action) => {
        state.satatus = 'succeeded'

        //  Getting the banners from the data
        state.bannersData = action.payload?.banners as BannersType[]

        //  Getting the categoryies from the data
        state.categoriesData = action.payload?.categories as otherImgsTypes[]

        //  Getting the priducts from the data
        state.products = action.payload?.products as Product[] | null

        // getting the styled_by_you
        state.styled_by_you = action.payload?.styled_by_you as styled_by_you[]
      })
      .addCase(thunkFetchingFromSupabase.rejected, (state, action) => {
        state.satatus = 'failed'
        state.error = action.error.message as string
      })
  }
})

export const {} = dataSlice.actions
export default dataSlice.reducer
