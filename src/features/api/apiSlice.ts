import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { addShortUrl } from "../shortUrl/shorterUrlSlice"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    getShortUrl: builder.query({
      // Here using base url shows cross origin so full url is used here
      query: (url) => `https://api.shrtco.de/v2/shorten?url=${url}`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          localStorage.setItem(
            "url",
            JSON.stringify({
              shortUrl: result.data.result,
            }),
          )
          dispatch(addShortUrl(result.data.result))
        } catch (err) {
          console.log(err)
        }
      },
    }),
  }),
})

export const { useGetShortUrlQuery } = apiSlice
