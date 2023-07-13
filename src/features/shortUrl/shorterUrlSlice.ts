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
    // editUrl(state, action) {
    //   state.long = state.url.map((longUrl) => {
    //     if (longUrl.id === action.payload.id) {
    //       return (longUrl.url = action.payload.url)
    //     }
    //   })
    // },

    removeUrl(state, action) {
      console.log(action.payload)
      console.log(state.url[0])
      const updatedUrls = state.url.filter(
        (data) => action.payload.id !== data.url.id,
      )
      state.url = updatedUrls
    },
  },
})

export const { addUrl, editUrl, removeUrl } = shorterUrlSlice.actions
export default shorterUrlSlice.reducer
