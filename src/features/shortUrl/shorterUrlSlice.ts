import { createSlice } from "@reduxjs/toolkit"

interface urlDataType {
  id: number
  longUrl: string
  shortUrl: string
}
interface editurlDataType {
  id: number
  longUrl: string
  shortUrl: string
}

interface CounterState {
  url: urlDataType[]
  editUrl: editurlDataType
}

const initialState = {
  url: [],
  editUrl: {
    id: 0,
    longUrl: "",
    shortUrl: "",
  },
} as CounterState

const shorterUrlSlice = createSlice({
  name: "shorterUrl",
  initialState,
  reducers: {
    addUrl(state, action) {
      const existingUrl = state.url.find(
        (url: urlDataType) => url.longUrl === action.payload.longUrl,
      )
      if (!existingUrl) {
        const urlToAdd = action.payload as urlDataType
        state.url.push(urlToAdd)
      }
    },
    getUrl(state, action) {
      state.url.map((data: urlDataType) => {
        if (data.id == action.payload) {
          state.editUrl = data
        }
      })
    },
    editUrl(state, action) {
      const localUrl = localStorage?.getItem("url")
      let url = JSON.parse(localUrl || "null")
      const updatelocaldUrl = url.map((u: urlDataType) => {
        if (u.id == action.payload.id) {
          u = action.payload
        }
        return u
      })
      url = updatelocaldUrl
      localStorage?.setItem("url", JSON.stringify(url))
      const updatedUrl = state.url.map((u: urlDataType) => {
        if (u.id == action.payload.id) {
          state.editUrl = action.payload
          return action.payload
        }
        return u
      })
      state.url = updatedUrl as urlDataType[]
    },
    removeUrl(state, action) {
      const localUrl = localStorage?.getItem("url")
      let url = JSON.parse(localUrl || "null")

      const removeLocalUrl = url.filter(
        (u: urlDataType) => u.id !== action.payload,
      )
      url = removeLocalUrl
      localStorage.setItem("url", JSON.stringify(url))
      const removeUrl = state.url.filter((data) => data.id !== action.payload)
      state.url = removeUrl
    },
  },
})

export const { addUrl, editUrl, removeUrl, getUrl } = shorterUrlSlice.actions
export default shorterUrlSlice.reducer
