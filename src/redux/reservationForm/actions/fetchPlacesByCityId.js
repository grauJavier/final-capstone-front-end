import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPlacesByCityId = createAsyncThunk('reservation/fetchPlaces', async (cityId) => {
  try {
    const response = await axios.get(`http://127.0.0.1:3000/places?city_id=${cityId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export default fetchPlacesByCityId;
