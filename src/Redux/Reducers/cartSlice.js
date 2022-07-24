import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};

export const shoppingCart = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.shoppingCart.push({
        id: action.payload.id,
        img: action.payload.img,
        name: action.payload.name,
        description: action.payload.description,
      });
    },
    deleteItem: (state, action) => {
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.shoppingCart = [];
    },
  },
});

export const { addItem, deleteItem, clearCart } = shoppingCart.actions;

export default shoppingCart.reducer;
