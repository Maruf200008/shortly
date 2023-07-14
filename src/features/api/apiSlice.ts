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
          console.log("Bangladesh")
          const result = await queryFulfilled
          const uniqueId = () => {
            const dateString = Date.now()

            return dateString
          }
          console.log(result)

          localStorage.setItem(
            "url",
            JSON.stringify({
              shortUrl: result.data.result?.full_short_link,
            }),
          )
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
    editShortUrl: builder.mutation({
      query: ({ url, id }) => ({
        url: `https://api.shrtco.de/v2/shorten?url=${url}`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cash Update  start
        console.log("Bangladesh1")
        apiSlice.util.updateQueryData("getShortUrl", arg.id, (draft) => {
          const draftUrl = draft.find((u) => u.id === arg.id)
          console.log(JSON.stringify(draftUrl))
          console.log("Bangladesh2")
          draftUrl.longUrl = arg.url
        })

        // optimistic cash Update  end

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
              longUrl: arg,
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
