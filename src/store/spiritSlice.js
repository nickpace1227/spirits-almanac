import { createSlice } from "@reduxjs/toolkit";

export const spiritCardSlice = createSlice({
  name: "spirit",
  initialState: {
    type: null,
    subtype: null,
    name: null,
    proof: null
  }  
  reducers: {
    addSpiritCard: (state) => {
        state.type = e.type
    }
  }
})