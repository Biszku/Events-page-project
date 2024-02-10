import { createSlice } from "@reduxjs/toolkit";

export const cartVisibility = createSlice({
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

export const { setVisibility } = cartVisibility.actions;

export default cartVisibility.reducer;
