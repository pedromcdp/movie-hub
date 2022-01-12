import { createSlice } from "@reduxjs/toolkit"

const nav = createSlice({
  name: "nav",
  initialState: { searchState: false, MobileNavShow: false },
  reducers: {
    setSearchState: (state, action) => {
      state.searchState = action.payload
    },
    setMobileNavState: state => {
      state.MobileNavShow = !state.MobileNavShow
    },
  },
})

export const { setSearchState, setMobileNavState } = nav.actions
export const useSearchState = state => state.nav.searchState
export const useMobileNavShow = state => state.nav.MobileNavShow
export default nav.reducer
