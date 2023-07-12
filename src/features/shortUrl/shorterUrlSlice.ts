import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
  short: []
  long: []
}

const initialState = { short: [], long: [] } as CounterState

const shorterUrlSlice = createSlice({
  name: "shorterUrl",
  initialState,
  reducers: {
    addLongUrl(state, action) {
      state.long.push(action.payload)
    },
    editLongUrl(state, action) {
      state.long = state.long.map((longUrl) => {
        if (longUrl.code === action.payload.code) {
          return (longUrl.url = action.payload.url)
        }
      })
    },
    addShortUrl(state, action) {
      state.short.push(action.payload)
    },
    removeShortUrl(state, action) {
      state.short.filter(action.payload.code === state.short.code)
    },
  },
})

export const { addLongUrl, editLongUrl, addShortUrl, removeShortUrl } =
  shorterUrlSlice.actions
export default shorterUrlSlice.reducer
