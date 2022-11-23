import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "inventory",
  initialState: {
    pages: [],
    favorites: [],
  },
  reducers: {
    addPage: (state, action) => {
      state.pages = [...state.pages, action.payload];
    },
    removePage: (state, action) => {
      state.pages = state.pages.filter((page) => {return page.id !== action.payload.id})
    },
    addFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload]
    }
  },
});

export const { addPage, removePage, addFavorite } = pageSlice.actions;

export default pageSlice.reducer;
