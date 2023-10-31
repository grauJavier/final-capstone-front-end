import { createSlice } from '@reduxjs/toolkit';
import sendRegistration from '../actions/sendRegistration';

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, error: null, notice: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendRegistration.fulfilled, (state, action) => {
        state.data = action.payload.data;  // Guarda los datos de la respuesta en el estado
        state.error = null;  // Limpia cualquier error anterior
        state.notice = action.payload.status.message;
      })
      .addCase(sendRegistration.rejected, (state, action) => {
        state.data = null;
        state.error = action.payload.status.message;
      });
  },
});

export default userSlice.reducer;
