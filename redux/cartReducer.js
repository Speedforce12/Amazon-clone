import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existed = state.cart.find((item) => item.id === payload.id);
      if (existed) {
        existed.quantity++;
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }
      toast.success("Item added successfully added to cart");
    },

    increment: (state, { payload }) => {
      const item = state.cart.find((item) => item.id === payload);
      item.quantity++;
    },

    decrement: (state, { payload }) => {
      const item = state.cart.find((item) => item.id === payload);
      if (item.quantity === 1) {
        const index = state.cart.findIndex((item) => item.id === payload);
        state.cart.splice(index, 1);
      } else {
        item.quantity--;
      }
    },

    removeItem: (state, { payload }) => {
      const index = state.cart.findIndex((item) => item.id === payload);
      state.cart.splice(index, 1);
    },

    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { increment, decrement, clearCart, removeItem, addToCart } =
  CartSlice.actions;
export default CartSlice.reducer;
