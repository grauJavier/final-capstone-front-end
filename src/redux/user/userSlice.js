import { createSlice } from '@reduxjs/toolkit';
import sendRegistration from './actions/sendRegistration';
import sendLogin from './actions/sendLogin';
import sendLogout from './actions/sendLogout';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    currentUser: null,
    token: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendRegistration.fulfilled, (state, action) => {
        state.data = action.payload.data;
      })
      .addCase(sendLogin.fulfilled, (state, action) => {
        if (!action.payload.body) return;
        state.currentUser = action.payload.body.status.data.user;
        state.token = action.payload.authorization;
      })
      .addCase(sendLogout.fulfilled, (state) => {
        state.currentUser = null;
        state.token = null;
      });
  }
});

export const selectUserId = (state) => {
  if (state.user.currentUser) {
    return state.user.currentUser.id;
  }
  return null;
};


export default userSlice.reducer;
