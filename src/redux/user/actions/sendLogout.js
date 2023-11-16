import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setNotice, setError, clearNoticeAndError } from '../../notice_alert/noticeAlertSlice';

const API = 'https://renteaze-d1cc8b293660.herokuapp.com/logout';

const sendLogout = createAsyncThunk('user/sendLogout', async (data, { dispatch }) => {
    return await axios.delete(API, data)
      .then(response => {
        dispatch(clearNoticeAndError());
        dispatch(setNotice('Logged out successfully!'));
        return response.data;
      })
      .catch(error => {
        dispatch(clearNoticeAndError());
        dispatch(setError("Couldn't log out"));
        return error.response.data;
      });
});

export default sendLogout;
