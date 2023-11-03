import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { URL } from "../../utils/constant";
import axios from "axios";

const GET_PLACES = "placesStore/places/GET_PLACES"

export const getPlaces = createAsyncThunk(GET_PLACES, () => {
  return axios.get(URL)
    .then(response => response.data)
});

const initialState = {
  places: [],
};

const placesSlice = createReducer(initialState, builder => {
  builder
    .addCase(getPlaces.fulfilled, (state, { payload }) => {
      return{
        ...state,
        places: [...payload],
      }
    })
})

export default placesSlice;