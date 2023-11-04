import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const deleteReservation = createAsyncThunk(
  'myReservations/deleteReservation',
  async (data) => {
    return axios.delete(`http://127.0.0.1:3000/users/${data.user_id}/reservations/${data.reservation_id}`)
      .then(() => data.reservation_id)
      .catch(error => {
        throw error;
      });
  }
);

export default deleteReservation;
