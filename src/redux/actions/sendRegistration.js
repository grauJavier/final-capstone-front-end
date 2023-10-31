import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://127.0.0.1:3000/signup';

const sendRegistration = createAsyncThunk('user/    sendRegistration', async (data) => {
  try {
    const response = await axios.post(API, {
      body: JSON.stringify(data)
    });

    return response.data;
  } catch (error) {
    throw new Error('Information is not valid.')
  }
});

export default sendRegistration;
