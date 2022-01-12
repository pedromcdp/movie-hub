import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { TMDB_API } from "../services/tmdb"
import searchReducer from "../features/NavBarSlice"
import searchPageReducer from "../features/SearchSlice"

export const store = configureStore({
  reducer: {
    [TMDB_API.reducerPath]: TMDB_API.reducer,
    nav: searchReducer,
    search: searchPageReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(TMDB_API.middleware),
})

setupListeners(store.dispatch)
