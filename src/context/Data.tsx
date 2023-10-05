import { createSlice } from '@reduxjs/toolkit'

interface initialStateTypes {
  currentFilter: string
}

const initialState: initialStateTypes = {
  currentFilter: 'women',
}

export const dataSlice = createSlice({
  name: 'data_slice',
  initialState,
  reducers: {
    gettingFilterName: (state, actions) => {
      state.currentFilter = actions.payload
    },
  },
})

export const { gettingFilterName } = dataSlice.actions

export default dataSlice.reducer
