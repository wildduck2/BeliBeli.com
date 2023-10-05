import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import dataReducer from './Data'

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  data: dataReducer,
})

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
})
