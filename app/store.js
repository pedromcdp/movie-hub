import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { TMDB_API } from "../services/tmdb"
import searchReducer from "../features/search"

export const store = configureStore({
  reducer: {
    [TMDB_API.reducerPath]: TMDB_API.reducer,
    search: searchReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(TMDB_API.middleware),
})

setupListeners(store.dispatch)
