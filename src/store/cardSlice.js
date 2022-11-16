import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "spirit",
  initialState: {
    type: null,
    subtype: null,
    brand: null,
    proof: null
  },  
  reducers: {
    addCard: (state, action) => {
        state.type = action.payload;
        state.subtype = action.payload;
        state.brand = action.payload;
        state.proof = action.payload;
    },
  },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;