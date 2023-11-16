import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setNotice, setError, clearNoticeAndError } from '../../notice_alert/noticeAlertSlice';

const API = 'https://renteaze-d1cc8b293660.herokuapp.com/signup';

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
