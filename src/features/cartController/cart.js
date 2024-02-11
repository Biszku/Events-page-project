import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cartVisibility",
  initialState: {
    value: false,
  },
  reducers: {
    setVisibility: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setVisibility } = cart.actions;

export default cart.reducer;
