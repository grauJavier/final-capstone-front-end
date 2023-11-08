import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setNotice, setError, clearNoticeAndError } from '../../NoticeAlert/NoticeAlertSlice';

const API = 'http://127.0.0.1:3000/login';

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
