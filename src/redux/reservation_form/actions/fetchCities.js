import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCities = createAsyncThunk('reservation/fetchCities', async () => {
  const response = await axios.get('https://renteaze-d1cc8b293660.herokuapp.com/cities');
  return response.data;
});

export default fetchCities;
