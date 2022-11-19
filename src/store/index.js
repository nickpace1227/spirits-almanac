import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./pageSlice";

export default configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
