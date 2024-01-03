import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./cardSlice";

export default configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});
