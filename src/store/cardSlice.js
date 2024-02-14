import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "inventory",
  initialState: {
    cards: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards = [...state.cards, action.payload];
      localStorage.setItem("localAlmanac", JSON.stringify({ ...state.cards }));
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => {
        return card.spiritId !== action.payload.spiritId;
      });
      localStorage.setItem("localAlmanac", JSON.stringify({ ...state.cards }));
    },
    toggleFavorite: (state, action) => {
      state.cards = state.cards.map((card) => {
        if (card.spiritId === action.payload.spiritId) {
          return {
            ...card,
            favorite: !card.favorite,
          };
        }
        return card;
      });
      localStorage.setItem("localAlmanac", JSON.stringify({ ...state.cards }));
    },
    editCard: (state, action) => {
      state.cards = state.cards.map((card) => {
        if (card.spiritId === action.payload.spiritId) {
          return {
            ...card,
            name: action.payload.name,
            type: action.payload.type,
            subType: action.payload.subType,
            distillery: action.payload.distillery,
            proof: action.payload.proof,
            notes: action.payload.notes,
            rating: action.payload.rating,
            favorite: action.payload.favorite,
          };
        }

        return card;
      });
      localStorage.setItem("localAlmanac", JSON.stringify({ ...state.cards }));
    },
  },
});

export const { addCard, removeCard, toggleFavorite, editCard } =
  cardSlice.actions;

export default cardSlice.reducer;
