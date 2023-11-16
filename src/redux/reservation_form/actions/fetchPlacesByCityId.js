import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPlacesByCityId = createAsyncThunk('reservation/fetchPlaces', async (cityId) => {
  const response = await axios.get(`https://renteaze-d1cc8b293660.herokuapp.com/places?city_id=${cityId}`);
  return response.data;
});

export default fetchPlacesByCityId;
