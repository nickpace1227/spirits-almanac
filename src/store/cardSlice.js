import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "inventory",
  initialState: {
    cards: [
      {
        name: "Lagavulin 16",
        type: "whiskey",
        subType: "islay",
        distillery: "Lagavulin",
        proof: "43%",
        notes: "things and stuff",
        spiritId: 1,
        favorite: true,
        rating: "10",
      },
      {
        name: "Spirit Labs Old Tom Gin",
        type: "gin",
        subType: "Old Tom",
        distillery: "Spirit Labs",
        proof: "40%",
        notes: "Lots of botanicals",
        spiritId: 2,
        favorite: true,
        rating: "8",
      },
      {
        name: "Balcones Single Malt Whiskey",
        type: "whiskey",
        subType: "Texas Whiskey",
        distillery: "Balcones",
        proof: "57%",
        notes: "like licking a burnt out campfire",
        spiritId: 3,
        favorite: false,
        rating: "9",
      },
      {
        name: "Makers Mark Cask Strength",
        type: "whiskey",
        subType: "bourbon",
        distillery: "Maker's Mark",
        proof: "57%",
        notes: "cherry, oak, and brown sugar",
        spiritId: 4,
        favorite: true,
        rating: "10",
      }
    ],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards = [...state.cards, action.payload];
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => {return card.spiritId !== action.payload.spiritId})
    },
    toggleFavorite: (state, action) => {
      state.cards = state.cards.map((card) => {
        if (card.spiritId === action.payload.spiritId) {
          return {
            ...card,
            favorite: !card.favorite,
          }
        }
        return card;
      });
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
          }
        }
        return card;
      })
    },
  },
});

export const { addCard, removeCard, toggleFavorite, editCard } = cardSlice.actions;

export default cardSlice.reducer;
