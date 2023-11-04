import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://127.0.0.1:3000/cities';


export const getCity = createAsyncThunk('city/getCity', async () => {
  const response = await axios.get(API);
  return response.data;
});

const citySlice = createSlice({
  name: 'city',
  initialState: {
    cities: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCity.fulfilled, (state, action) => {
        state.cities = [...action.payload];
      })
  }
});

export default citySlice.reducer;
