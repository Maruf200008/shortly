import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { addUrl, editUrl } from "../shortUrl/shorterUrlSlice"

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

          // create a unique id
          const uniqueId = () => {
            const dateString = Date.now()
            return dateString
          }

          console.log("Maruf")
          let urls = JSON.parse(localStorage.getItem("url")) || []
          const newUrl = {
            id: uniqueId(),
            shortUrl: result.data.result?.full_short_link,
            longUrl: arg,
          }

          urls.push(newUrl)

          localStorage.setItem("url", JSON.stringify(urls))

          dispatch(
            addUrl({
              id: uniqueId(),
              shortUrl: result.data.result?.full_short_link,
              longUrl: arg,
            }),
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),
    editShortUrl: builder.query({
      // Here using base url shows cross origin so full url is used here
      query: ({ url, id }) => `https://api.shrtco.de/v2/shorten?url=${url}`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          // localStorage.setItem(
          //   "url",
          //   JSON.stringify({
          //     shortUrl: result.data.result?.full_short_link,
          //   }),
          // )
          dispatch(
            editUrl({
              id: arg.id,
              shortUrl: result.data.result?.full_short_link,
              longUrl: arg.url,
            }),
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),
  }),
})

export const { useGetShortUrlQuery, useEditShortUrlQuery } = apiSlice
