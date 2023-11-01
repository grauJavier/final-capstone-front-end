import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://127.0.0.1:3000/logout';

const sendLogout = createAsyncThunk('user/sendLogout', async (data) => {
  try {
    const response = await axios.delete(API, data);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

export default sendLogout;
