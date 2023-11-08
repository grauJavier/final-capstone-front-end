import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setNotice, setError, clearNoticeAndError } from '../../notice_alert/noticeAlertSlice';

const API = 'http://127.0.0.1:3000/signup';

const sendRegistration = createAsyncThunk('user/sendRegistration', async (data, { dispatch }) => {
    return await axios.post(API, data)
      .then(response => {
        dispatch(clearNoticeAndError());
        dispatch(setNotice('Signed up successfully!'));
    
        return response.data;
      })
      .catch(error => {
        dispatch(clearNoticeAndError());
        dispatch(setError(error.response.data.status.message));
        return error.response.data.status.message;
      });
});

export default sendRegistration;
