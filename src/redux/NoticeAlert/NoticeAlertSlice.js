import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notice: null,
  error: null,
};

const NoticeAlertSlice = createSlice({
  name: 'noticeAlert',
  initialState,
  reducers: {
    setNotice: (state, action) => {
      state.notice = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearNoticeAndError: (state) => {
      state.notice = null;
      state.error = null;
    },
  },
});

export const { setNotice, setError, clearNoticeAndError } = NoticeAlertSlice.actions;
export default NoticeAlertSlice.reducer;
