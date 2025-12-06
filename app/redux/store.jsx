
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reduce";

const store = configureStore({
  reducer: {
    productReducer: productReducer,
  },
});

export default store;
