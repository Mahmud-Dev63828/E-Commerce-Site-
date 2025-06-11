import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./AllSlice/countSlice.js";
import { ProductApi } from "./Api/ProductApi.js";
export const store = configureStore({
  reducer: {
    count: counterSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});
