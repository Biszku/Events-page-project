import { configureStore } from "@reduxjs/toolkit";
import cartVisibility from "../features/visibility/cartVisibility";

export default configureStore({
  reducer: {
    cartVisibility,
  },
});
