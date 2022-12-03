import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "inventory",
  initialState: {
    cards: [
      {
      name: "Lagvulin 16",
      type: "whiskey",
      subType: "islay",
      brand: "Lagavulin",
      proof: "43%",
      notes: "things and stuff"
      },
      {
        name: "Redbreast 12",
        type: "whiskey",
        subType: "Irish",
        brand: "Redbreast",
        proof: "43%",
        notes: "tastes like whiskey to me",
      }
    ],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards = [...state.cards, action.payload];
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => {return card.id !== action.payload.id})
    },
    toggleFavorite: (state, action) => {
      state.cards = state.cards.map((card) => {
        if (card.id === action.payload) {
          return {
            ...card,
            favorite: !card.favorite,
          }
        }
        return card;
      });
    },
  },
});

export const { addCard, removeCard, toggleFavorite } = cardSlice.actions;

export default cardSlice.reducer;
