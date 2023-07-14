import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
  url: string[]
}

const initialState: CounterState = { url: [] }

const shorterUrlSlice = createSlice({
  name: "shorterUrl",
  initialState,
  reducers: {
    addUrl(state, action) {
      console.log(state.url)
      console.log(action.payload)
      state.url.push(action.payload)
    },
    editUrl(state, action) {
      console.log(action.payload)
      state.url = state.url.map((longUrl) => {
        if (longUrl.id === action.payload.id) {
          longUrl = action.payload
          console.log(JSON.stringify(longUrl))
        }
      })
      return { ...state }
    },

    removeUrl(state, action) {
      const updatedUrls = state.url.filter(
        (data) => action.payload.id === data.id,
      )
      state.url = updatedUrls
    },
  },
})

export const { addUrl, editUrl, removeUrl } = shorterUrlSlice.actions
export default shorterUrlSlice.reducer
