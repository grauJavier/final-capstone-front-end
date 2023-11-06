import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { placesURL } from "../../utils/constant";
import axios from "axios";

const GET_PLACES = "placesStore/places/GET_PLACES"
const GET_DETAILS = "placesStore/places/GET_DETAILS"

export const getPlaces = createAsyncThunk(GET_PLACES, () => {
  return axios.get(placesURL)
    .then(response => response.data)
});

export const getDetails = createAsyncThunk(GET_DETAILS, id => {
  const detailsURL = `http://127.0.0.1:3000/places/${id}/details`;
  return axios.get(detailsURL)
    .then((response) => response.data);
});

const initialState = {
  places: [],
  details: null,
};

const placesSlice = createReducer(initialState, builder => {
  builder
    .addCase(getPlaces.fulfilled, (state, { payload }) => {
      return{
        ...state,
        places: [...payload],
      }
    })
    .addCase(getDetails.fulfilled, (state, { payload }) => {
      return{
        ...state,
        details: payload,
      }
    })
})

export default placesSlice;