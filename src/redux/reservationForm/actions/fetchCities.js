import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCities = createAsyncThunk('reservation/fetchCities', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/cities');
    return response.data;
  } catch (error) {
    throw error;
  }
});

export default fetchCities;
