import { createSlice } from "@reduxjs/toolkit"

const search = createSlice({
  name: "search",
  initialState: false,
  reducers: {
    setState: (state, action) => action.payload,
  },
})

export const { setState } = search.actions
export const searchState = state => state.search
export default search.reducer
