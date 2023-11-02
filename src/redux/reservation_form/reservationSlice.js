import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCities = createAsyncThunk('reservation/fetchCities', async () => {
  const response = await fetch('http://127.0.0.1:3000/cities');
  const data = await response.json();
  return data;
});

export const fetchPlaces = createAsyncThunk('reservation/fetchPlaces', async (cityId) => {
  const response = await fetch('http://127.0.0.1:3000/places');
  const data = await response.json();

  const filteredPlaces = data.filter((place) => place.city_id === cityId);
  return filteredPlaces;
});

const initialState = {
  cities: [],
  places: [],
  status: 'idle',
  error: null,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPlaces.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.places = action.payload;
      })
      .addCase(fetchPlaces.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reservationSlice.reducer;
