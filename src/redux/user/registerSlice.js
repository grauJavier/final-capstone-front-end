import { createSlice } from '@reduxjs/toolkit';
import sendRegistration from '../actions/sendRegistration';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(sendRegistration.fulfilled, (state, action) => {
        state.data = action.payload
      })
  }
})

export default userSlice.reducers;
