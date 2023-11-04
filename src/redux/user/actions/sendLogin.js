import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://127.0.0.1:3000/login';

const sendLogin = createAsyncThunk('user/sendLogin', async (data) => {
  try {
    const response = await axios.post(API, data);

    // Return the data and the headers.
    const responseDataWithHeaders = {
      body: response.data,
      authorization: response.headers.authorization
    };

    return responseDataWithHeaders;
  } catch (error) {
    return error.response.data;
  }
});

export default sendLogin;
