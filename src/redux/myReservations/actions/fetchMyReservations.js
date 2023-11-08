import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMyReservations = createAsyncThunk('myReservations/fetchMyReservations', async (userId) => {
  const response = await axios.get(`http://127.0.0.1:3000/users/${userId}/reservations`);
  return response.data;
});

export default fetchMyReservations;
