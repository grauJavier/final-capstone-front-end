import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { URL } from "../../utils/constant";
import axios from "axios";

const GET_PLACES = "placesStore/places/GET_PLACES";

export const getPlaces = createAsyncThunk(GET_PLACES, () => {
  return axios.get(URL)
    .then(response => response.data)
});

export const sendPlaces = createAsyncThunk('placesStore/places/sendPlaces', async (data) => {
  try {
    return axios.post(`http://127.0.0.1:3000/users/${data.user_id}/places`, data.body)
      .then(response => response.data);
  } catch (error) {
    console.error(error);
  }
})

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
    .addCase(sendPlaces.fulfilled, (state, action) => {
      state.places.push(action.payload);
    })
})

export default placesSlice;
