import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cartState",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
      if (!cartFromLocalStorage)
        localStorage.setItem("cart", JSON.stringify([action.payload]));
      else
        localStorage.setItem(
          "cart",
          JSON.stringify([action.payload, ...cartFromLocalStorage])
        );
      state.value = [action.payload, ...state.value];
    },
  },
});

export const { addToCart } = cart.actions;

export default cart.reducer;
