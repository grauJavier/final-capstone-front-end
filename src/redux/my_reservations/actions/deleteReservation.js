import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const deleteReservation = createAsyncThunk(
  'myReservations/deleteReservation',
  async (data) => {
    return axios.delete(`https://renteaze-d1cc8b293660.herokuapp.com/users/${data.user_id}/reservations/${data.reservation_id}`)
      .then(() => data.reservation_id)
      .catch(error => {
        throw error;
      });
  }
);

export default deleteReservation;
