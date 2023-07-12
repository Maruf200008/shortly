import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "../features/api/apiSlice"
import counterReducer from "../features/counter/counterSlice"
import shorterUrlReducer from "../features/shortUrl/shorterUrlSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shorterUrl: shorterUrlReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
