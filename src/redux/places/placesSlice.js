import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { placesURL } from "../../utils/constant";
import axios from "axios";
import { setNotice, setError, clearNoticeAndError } from "../notice_alert/noticeAlertSlice";

const GET_PLACES = "placesStore/places/GET_PLACES";
const GET_DETAILS = "placesStore/places/GET_DETAILS";
const DELETE_PLACE = "placesStore/places/DELETE_PLACE";
const GET_PLACES_BY_ID = "placesStore/places/GET_PLACES_BY_ID";

export const getPlaces = createAsyncThunk(GET_PLACES, () => {
  return axios.get(placesURL)
    .then(response => response.data)
});

export const getPlacesById = createAsyncThunk(GET_PLACES_BY_ID, id => {
  return axios.get(placesURL, { params: { user_id: id } })
    .then(response => response.data)
});

export const getDetails = createAsyncThunk(GET_DETAILS, id => {
  const detailsURL = `https://renteaze-d1cc8b293660.herokuapp.com/places/${id}/details`;
  return axios.get(detailsURL)
    .then((response) => response.data);
});

export const sendPlaces = createAsyncThunk('placesStore/places/sendPlaces', async (data, { dispatch }) => {
    return await axios.post(`https://renteaze-d1cc8b293660.herokuapp.com/users/${data.user_id}/places`, data.body)
      .then(response => {
        dispatch(clearNoticeAndError());
        dispatch(setNotice('Place created successfully!'));
        return response.data;
      })
      .catch(error => {
        dispatch(clearNoticeAndError());
        dispatch(setError('Could not create a Place'));
        return error;
      })
})

export const deletePlace = createAsyncThunk(DELETE_PLACE, data => {
  const deleteURL = `https://renteaze-d1cc8b293660.herokuapp.com/users/${data.user_id}/places/${data.place_id}`;
  return axios.delete(deleteURL)
  .then(() => data.place_id)
  .catch(error => {
    throw error;
  });
});

const initialState = {
  places: [],
  placesById: [],
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
    .addCase(getPlacesById.fulfilled, (state, { payload }) => {
      return{
        ...state,
        placesById: [...payload],
      }
    })
    .addCase(sendPlaces.fulfilled, (state, action) => {
      state.places.push(action.payload);
    })
    .addCase(deletePlace.fulfilled, (state, { payload }) => {
      const placeId = payload;
      state.placesById = state.placesById.filter(
        (place) => place.id !== placeId
      );
      state.places = state.places.filter(
        (place) => place.id !== placeId
      );
    });
})

export default placesSlice;
