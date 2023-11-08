import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCities = createAsyncThunk('reservation/fetchCities', async () => {
  const response = await axios.get('http://127.0.0.1:3000/cities');
  return response.data;
});

export default fetchCities;
