import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
  url: []
}

const initialState = { url: [] } as CounterState

const shorterUrlSlice = createSlice({
  name: "shorterUrl",
  initialState,
  reducers: {
    addUrl(state, action) {
      console.log(action.payload)
      state.url.push(action.payload)
    },
    editUrl(state, action) {
      state.long = state.url.map((longUrl) => {
        if (longUrl.id === action.payload.id) {
          return (longUrl.url = action.payload.url)
        }
      })
    },

    removeUrl(state, action) {
      state.url.filter(action.payload.id === state.url.id)
    },
  },
})

export const { addUrl, editUrl, removeUrl } = shorterUrlSlice.actions
export default shorterUrlSlice.reducer
