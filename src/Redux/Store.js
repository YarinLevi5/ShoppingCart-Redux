import { configureStore } from "@reduxjs/toolkit";
import shoppingCart, { addItem } from "./Reducers/cartSlice";
export const store = configureStore({
  reducer: {
    cart: shoppingCart,
  },
});

// store.dispatch(
//   addItem({
//     id: "1",
//     img: "",
//     name: "Apple",
//     description: "Red apple",
//   })
// );
