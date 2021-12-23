import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: builder => ({
    getTrendingTitles: builder.query({
      query: ({ type, time_window, page }) =>
        `trending/${type}/${time_window}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-pt&page=${page}`,
    }),
  }),
})

export const { useGetTrendingTitlesQuery } = moviesApi
