import { createSlice } from '@reduxjs/toolkit';
import sendRegistration from '../actions/sendRegistration';
import sendLogin from '../actions/sendLogin';
import sendLogout from '../actions/sendLogout';

const userSlice = createSlice({
  name: 'user',
  initialState: { 
    data: null,
    error: null,
    notice: null,
    currentUser: null,
    token: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendRegistration.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.error = null;
        state.notice = action.payload.status.message;
      })
      .addCase(sendRegistration.rejected, (state, action) => {
        state.error = action.payload.status.message;
        state.notice = null;
      })
      .addCase(sendLogin.fulfilled, (state, action) => {
        state.currentUser = action.payload.body.status.data.user;
        state.error = null;
        state.notice = action.payload.body.status.message;
        state.token = action.payload.authorization;
      })
      .addCase(sendLogin.rejected, (state, action) => {
        state.error = action.payload;
        state.notice = null;
      })
      .addCase(sendLogout.fulfilled, (state, action) => {
        state.currentUser = null;
        state.token = null;
        state.notice = action.payload.message;
        state.error = null;
      })
      .addCase(sendLogout.rejected, (state, action) => {
        state.notice = null;
        state.error = action.payload.message;
      })
  },
});

export const selectUserId = (state) => {
  if (state.user.currentUser) {
    return state.user.currentUser.id;
  }
  return null;
};


export default userSlice.reducer;
