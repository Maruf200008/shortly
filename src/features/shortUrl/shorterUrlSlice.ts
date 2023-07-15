import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
  url: []
  editUrl: object
}

const initialState = { url: [], editUrl: {} } as CounterState

const shorterUrlSlice = createSlice({
  name: "shorterUrl",
  initialState,
  reducers: {
    addUrl(state, action) {
      console.log("bangladesh")
      console.log(JSON.stringify(state.url))
      state.url.push(action.payload)
      console.log(JSON.stringify(state.url))
    },
    getUrl(state, action) {
      console.log(action.payload)
      state.url.map((data) => {
        if (data.id == action.payload) {
          console.log(JSON.stringify(data))
          state.editUrl = data
        }
      })
    },
    editUrl(state, action) {
      const localUrl = localStorage?.getItem("url")
      console.log(JSON.parse(localUrl))
      const updatedUrl = state.url.map((u) => {
        if (u.id === action.payload.id) {
          state.editUrl = action.payload
          return action.payload
        }
        return u
      })
      state.url = updatedUrl
    },
    removeUrl(state, action) {
      console.log(action.payload)
      const removeUrl = state.url.filter((data) => data.id !== action.payload)
      console.log(JSON.stringify(removeUrl))
      state.url = removeUrl
    },
  },
})

export const { addUrl, editUrl, removeUrl, getUrl } = shorterUrlSlice.actions
export default shorterUrlSlice.reducer
