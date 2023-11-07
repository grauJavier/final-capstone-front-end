import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setNotice, setError, clearNoticeAndError } from "../../NoticeAlert/NoticeAlertSlice";

const createReservation = createAsyncThunk('myReservations/createReservation', async (data, { dispatch }) => {
  return await axios.post(`http://127.0.0.1:3000/users/${data.user_id}/reservations`, { place_id: data.place_id, schedule_date: data.schedule_date})
    .then(response => {
      dispatch(clearNoticeAndError());
      dispatch(setNotice('Reservation submitted successfully'));
      return response.data;
    })
    .catch(error => {
      dispatch(clearNoticeAndError());
      dispatch(setError('Error submitting reservation'));
      return error.response.data;
    })
});

export default createReservation;
