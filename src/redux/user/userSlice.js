import { createSlice } from '@reduxjs/toolkit';
import sendRegistration from '../actions/sendRegistration';
import sendLogin from '../actions/sendLogin';

const userSlice = createSlice({
  name: 'user',
  initialState: { 
    data: null,
    errorRegister: null,
    noticeRegister: null,
    currentUser: null,
    errorLogin: null,
    noticeLogin: null
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
      })
      .addCase(sendLogin.fulfilled, (state, action) => {
        state.currentUser = action.payload.data.user;
        state.errorLogin = null;
        state.noticeLogin = action.payload.status.message;
        console.log(state.currentUser);
      })
      .addCase(sendLogin.rejected, (state, action) => {
        state.errorLogin = action.payload.status.message;
      });
  },
});

export default userSlice.reducer;
