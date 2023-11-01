import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://127.0.0.1:3000/signup';

const sendRegistration = createAsyncThunk('user/sendRegistration', async (data) => {
  try {
    const response = await axios.post(API, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export default sendRegistration;
