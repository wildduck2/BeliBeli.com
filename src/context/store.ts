import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { dataReducer } from './Data'
import { utilReducer } from './utils'
import { userReducer } from './User'

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  data: dataReducer,
  util: utilReducer,
  user: userReducer
})

export const store = configureStore({
  reducer: {
    data: dataReducer,
    util: utilReducer,
    user: userReducer
  }
})
