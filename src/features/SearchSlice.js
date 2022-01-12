import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  page: 1,
  filter: {
    name: "Popularidade Descendente",
    value: "popularity.desc",
  },
}

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setNextPage: state => {
      state.page = state.page + 1
    },
    setPreviousPage: state => {
      state.page = state.page - 1
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    setFilter: (state, action) => {
      state.filter = action.payload
      state.page = initialState.page
    },
    resetPageAndFilter: state => {
      state.page = initialState.page
      state.filter = initialState.filter
    },
  },
})

export const {
  setNextPage,
  setPreviousPage,
  setPage,
  resetPageAndFilter,
  setFilter,
} = SearchSlice.actions
export const SelectedPage = state => state.search.page
export const SelectedFilter = state => state.search.filter
export default SearchSlice.reducer
