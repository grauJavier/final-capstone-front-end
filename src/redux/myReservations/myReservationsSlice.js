import { createSlice } from '@reduxjs/toolkit';
import deleteReservation from './actions/deleteReservation';
import fetchMyReservations from './actions/fetchMyReservations';

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};

const myReservationsSlice = createSlice({
  name: 'myReservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteReservation.fulfilled, (state, action) => {
      const reservationId = action.payload;
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== reservationId
      );
    });

    builder.addCase(fetchMyReservations.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(fetchMyReservations.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.reservations = action.payload;
    });

    builder.addCase(fetchMyReservations.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default myReservationsSlice.reducer;
