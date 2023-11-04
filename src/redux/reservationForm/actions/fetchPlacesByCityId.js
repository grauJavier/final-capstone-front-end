import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPlacesByCityId = createAsyncThunk('reservation/fetchPlaces', async (cityId) => {
  const response = await axios.get(`http://127.0.0.1:3000/places?city_id=${cityId}`);
  return response.data;
});

export default fetchPlacesByCityId;
