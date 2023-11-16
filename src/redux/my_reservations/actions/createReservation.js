import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setNotice, setError, clearNoticeAndError } from "../../notice_alert/noticeAlertSlice";

const createReservation = createAsyncThunk('myReservations/createReservation', async (data, { dispatch }) => {
  return await axios.post(`https://renteaze-d1cc8b293660.herokuapp.com/users/${data.user_id}/reservations`, { place_id: data.place_id, schedule_date: data.schedule_date})
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
