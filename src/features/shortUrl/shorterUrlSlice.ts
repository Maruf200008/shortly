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
      const existingUrl = state.url.find(
        (url) => url.longUrl == action.payload.longUrl,
      )
      if (!existingUrl) {
        state.url.push(action.payload)
      }
    },
    getUrl(state, action) {
      state.url.map((data) => {
        if (data.id == action.payload) {
          state.editUrl = data
        }
      })
    },
    editUrl(state, action) {
      const localUrl = localStorage?.getItem("url")
      let url = JSON.parse(localUrl)
      const updatelocaldUrl = url.map((u) => {
        if (u.id === action.payload.id) {
          u = action.payload
        }
        return u
      })
      url = updatelocaldUrl
      localStorage?.setItem("url", JSON.stringify(url))
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
      const localUrl = localStorage?.getItem("url")
      let url = JSON.parse(localUrl)

      const removeLocalUrl = url.filter((u) => u.id !== action.payload)
      url = removeLocalUrl
      localStorage.setItem("url", JSON.stringify(url))
      const removeUrl = state.url.filter((data) => data.id !== action.payload)
      state.url = removeUrl
    },
  },
})

export const { addUrl, editUrl, removeUrl, getUrl } = shorterUrlSlice.actions
export default shorterUrlSlice.reducer
