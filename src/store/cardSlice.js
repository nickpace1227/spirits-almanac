import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "inventory",
  initialState: {
    cards: [{      
      name: "Lagavulin Offerman Edition",
      type: "whiskey",
      subType: "Islay",
      brand: "Lagavulin",
      proof: "40%",
      notes: "Some really thorough notes",
      favorite: false,
      id: 2,
    }, 
    {
      name: "Compass Box Artist's Blend",
      type: "Scotch",
      subType: "Blend",
      brand: "Compass Box",
      proof: "43%",
      notes: "pretty goddamn tasty and reasonably priced",
      favorite: false,
      id: 17,
    }],
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
