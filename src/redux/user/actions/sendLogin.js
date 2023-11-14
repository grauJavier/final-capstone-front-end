import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setNotice, setError, clearNoticeAndError } from '../../notice_alert/noticeAlertSlice';

const API = 'https://renteaze-d1cc8b293660.herokuapp.com/login';

const sendLogin = createAsyncThunk('user/sendLogin', async (data, { dispatch }) => {  
    return await axios.post(API, data)
      .then(response => {

        // Return the data and the headers.
        const responseDataWithHeaders = {
          body: response.data,
          authorization: response.headers.authorization
        };

        dispatch(clearNoticeAndError());
        dispatch(setNotice('Logged in successfully!'));

        return responseDataWithHeaders;
      })
      .catch(error => {
        dispatch(clearNoticeAndError());
        dispatch(setError(error.response.data));
        return error.response.data;
      });
});

export default sendLogin;
