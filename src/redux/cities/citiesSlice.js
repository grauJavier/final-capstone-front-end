import { createSlice } from "@reduxjs/toolkit";
import getCities from "./getCities";

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCities.fulfilled, (state, action) => {
        state.cities = [...action.payload];
      })
  }
});

export default citiesSlice.reducer;
