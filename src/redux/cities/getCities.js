import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API = 'https://api.apilayer.com/geo/country/cities/usa';

const config = {
  headers: {
    "apikey": "ndkfTV5a2gUtSe9qUJ6I24UUypza2iR8",
  }
};

const getCities = createAsyncThunk('cities/getCities', async () => {
  try {
    const response = await axios.get(API, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export default getCities;
