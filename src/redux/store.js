import { configureStore } from "@reduxjs/toolkit";
import placesSlice from "./places/placesSlice";

export const store = configureStore({
  reducer: {
    placesSlice
  }
})

export default store;