import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { placesURL } from "../../utils/constant";
import axios from "axios";
import { setNotice, setError, clearNoticeAndError } from "../NoticeAlert/NoticeAlertSlice";
import { selectUserId } from '../../redux/user/userSlice.js';

const GET_PLACES = "placesStore/places/GET_PLACES";
const GET_DETAILS = "placesStore/places/GET_DETAILS";


export const getPlaces = createAsyncThunk(GET_PLACES, () => {
  return axios.get(placesURL)
    .then(response => response.data)
});

export const getDetails = createAsyncThunk(GET_DETAILS, id => {
  const detailsURL = `http://127.0.0.1:3000/places/${id}/details`;
  return axios.get(detailsURL)
    .then((response) => response.data);
});

export const sendPlaces = createAsyncThunk('placesStore/places/sendPlaces', async (data, { dispatch }) => {
    return await axios.post(`http://127.0.0.1:3000/users/${data.user_id}/places`, data.body)
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
    .addCase(sendPlaces.fulfilled, (state, action) => {
      state.places.push(action.payload);
    })
})

export default placesSlice;
