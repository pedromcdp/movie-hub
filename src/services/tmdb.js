import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const TMDB_API = createApi({
  reducerPath: "TMDB_API",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: builder => ({
    getTrendingTitles: builder.query({
      query: ({ type, time_window, page }) =>
        `trending/${type}/${time_window}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-pt&page=${page}`,
    }),
    getMovie: builder.query({
      query: ({ type, query }) =>
        `${type}/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-pt&page=1`,
    }),
    getSearchTerm: builder.query({
      query: ({ categorie, searchTerm, page }) =>
        `search/${categorie}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-pt&query=${searchTerm}&page=${page}`,
    }),
    getDiscover: builder.query({
      query: ({ type, sort, page }) =>
        `discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-pt&sort_by=${sort}&page=${page}`,
    }),
    getCast: builder.query({
      query: ({ type, id }) =>
        `/${type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=pt-pt`,
    }),
  }),
})

export const {
  useGetTrendingTitlesQuery,
  useGetMovieQuery,
  useGetSearchTermQuery,
  useGetDiscoverQuery,
  useGetCastQuery,
} = TMDB_API
