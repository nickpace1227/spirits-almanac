import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "inventory",
  initialState: {
    pages: [],
  },
  reducers: {
    addPage: (state, action) => {
      state.pages = [...state.pages, action.payload];
    },
    removePage: (state, action) => {
      state.pages = state.pages.filter((page) => {return page.id !== action.payload.id})
    },
    toggleFavorite: (state, action) => {
      state.pages = [...state.pages, page.favorite = action.payload.favorite]
    }
  },
});

export const { addPage, removePage, toggleFavorite } = pageSlice.actions;

export default pageSlice.reducer;
