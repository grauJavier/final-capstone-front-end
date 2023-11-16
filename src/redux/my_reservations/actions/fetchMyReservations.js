import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMyReservations = createAsyncThunk('myReservations/fetchMyReservations', async (userId) => {
  const response = await axios.get(`https://renteaze-d1cc8b293660.herokuapp.com/users/${userId}/reservations`);
  return response.data;
});

export default fetchMyReservations;
