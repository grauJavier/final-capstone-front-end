import { createSlice } from '@reduxjs/toolkit';
import sendRegistration from '../actions/sendRegistration';
import sendLogin from '../actions/sendLogin';
import sendLogout from '../actions/sendLogout';

const userSlice = createSlice({
  name: 'user',
  initialState: { 
    data: null,
    errorRegister: null,
    noticeRegister: null,
    currentUser: null,
    errorLogin: null,
    noticeLogin: null,
    token: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendRegistration.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.errorRegister = null;
        state.noticeRegister = action.payload.status.message;
      })
      .addCase(sendRegistration.rejected, (state, action) => {
        state.errorRegister = action.payload.status.message;
        state.noticeRegister = null;
      })
      .addCase(sendLogin.fulfilled, (state, action) => {
        state.currentUser = action.payload.body.status.data.user;
        state.errorLogin = null;
        state.noticeLogin = action.payload.body.status.message;
        state.token = action.payload.authorization;
      })
      .addCase(sendLogin.rejected, (state, action) => {
        state.errorLogin = action.payload;
        state.noticeLogin = null;
      })
      .addCase(sendLogout.fulfilled, (state, action) => {
        state.currentUser = null;
        state.token = null;
        state.noticeLogin = action.payload.message;
        state.errorLogin = null;
      })
      .addCase(sendLogout.rejected, (state, action) => {
        state.noticeLogin = null;
        state.errorLogin = action.payload.message;
      })
  },
});

export default userSlice.reducer;
