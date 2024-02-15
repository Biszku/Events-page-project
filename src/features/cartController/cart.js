import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    value: (() => {
      let cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
      if (cartFromLocalStorage) return cartFromLocalStorage;
      else return [];
    })(),
  },
  reducers: {
    addToCart: (state, action) => {
      state.value = [{ amount: 1, ...action.payload }, ...state.value];
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    removeFromCart: (state, action) => {
      state.value = state.value.filter((obj) => obj.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    changeAmount: (state, action) => {
      if (action.payload.type)
        state.value.find((obj) => obj.id === action.payload.id).amount =
          action.payload.amount;
      else
        state.value.find((obj) => obj.id === action.payload.id).amount +=
          action.payload.amount;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const { addToCart, removeFromCart, changeAmount } = cart.actions;

export default cart.reducer;
