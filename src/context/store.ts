import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import dataReducer from "./Data";
import utilReducer from './Utils.tsx'
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  data: dataReducer,
  util: utilReducer
});

export const store = configureStore({
  reducer: {
    data: dataReducer,
    util: utilReducer
  },
});
