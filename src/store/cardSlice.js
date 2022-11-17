import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "inventory",
  initialState: {
    cards: [],
  },
  reducers: {
    addCard: (state, action) => {state.cards = [...state, action.payload]},
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;