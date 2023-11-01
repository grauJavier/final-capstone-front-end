import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://127.0.0.1:3000/logout';

const sendLogout = createAsyncThunk('user/sendLogout', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.delete(API, data);

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export default sendLogout;
