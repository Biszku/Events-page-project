import { configureStore } from "@reduxjs/toolkit";
import cartVisibility from "../features/visibility/cartVisibility";
import cart from "../features/cartController/cart";

export default configureStore({
  reducer: {
    cartVisibility,
    cart,
  },
});
