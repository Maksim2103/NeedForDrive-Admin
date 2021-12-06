import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAsyncRegister,
  fetchAsyncLogin,
  fetchAsyncLogout,
  fetchAsyncRefreshToken,
} from '../thunks';

const initialState = {
  dataResponseRegister: null,
  dataResponseLogin: null,
};

export const authorizationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Registration in APP
    builder.addCase(fetchAsyncRegister.pending, (state) => {
      state.loadingResponseRegister = 'pending';
    });
    builder.addCase(fetchAsyncRegister.fulfilled, (state, action) => {
      state.dataResponseRegister = action.payload;
      state.loadingResponseRegister = 'succeeded';
    });
    builder.addCase(fetchAsyncRegister.rejected, (state, action) => {
      state.loadingResponseRegister = 'failed';
      state.errorResponseRegister = action.error.message;
    });

    //LogIn
    builder.addCase(fetchAsyncLogin.pending, (state) => {
      state.loadingResponseLogin = 'pending';
    });
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      state.dataResponseLogin = action.payload;
      state.loadingResponseLogin = 'succeeded';
    });
    builder.addCase(fetchAsyncLogin.rejected, (state, action) => {
      state.loadingResponseLogin = 'failed';
      state.errorResponseLogin = action.error.message;
    });

    // LogOut
    builder.addCase(fetchAsyncLogout.pending, (state) => {
      state.loadingResponseLogout = 'pending';
    });
    builder.addCase(fetchAsyncLogout.fulfilled, (state, action) => {
      state.dataResponseLogin = null;
      state.dataResponseRegister = null;
      state.loadingResponseLogout = 'succeeded';
    });
    builder.addCase(fetchAsyncLogout.rejected, (state, action) => {
      state.loadingResponseLogout = 'failed';
      state.errorResponseLogout = action.error.message;
    });

    // Refresh token
    builder.addCase(fetchAsyncRefreshToken.pending, (state) => {
      state.loadingResponseRefreshToken = 'pending';
    });
    builder.addCase(fetchAsyncRefreshToken.fulfilled, (state, action) => {
      state.dataResponseRefreshToken = action.payload;
      state.loadingResponseRefreshToken = 'succeeded';
    });
    builder.addCase(fetchAsyncRefreshToken.rejected, (state, action) => {
      state.loadingResponseRefreshToken = 'failed';
      state.errorResponseRefreshToken = action.error.message;
    });
  },
});

export const selectDataResponseRegister = (state) =>
  state.auth.dataResponseRegister;
export const selectAccessToken = (state) =>
  state.auth.dataResponseLogin?.access_token;

export const {} = authorizationSlice.actions;

export default authorizationSlice.reducer;
