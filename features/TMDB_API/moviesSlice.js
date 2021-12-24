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
    getMovie: builder.query({
      query: ({ content_type, query }) =>
        `${content_type}/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-pt&page=1`,
    }),
    getSearchTerm: builder.query({
      query: ({ categorie, searchTerm }) =>
        `search/${categorie}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-pt&query=${searchTerm}&page=1`,
    }),
  }),
})

export const {
  useGetTrendingTitlesQuery,
  useGetMovieQuery,
  useGetSearchTermQuery,
} = moviesApi
