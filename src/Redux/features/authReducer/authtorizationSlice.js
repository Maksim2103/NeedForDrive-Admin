import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAsyncLogin,
  fetchAsyncLogout,
  fetchAsyncRefreshToken,
} from '../thunks';

const initialState = {
  dataResponseLogin: null,
  errorResponseLogin: null,
};

export const authorizationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //LogIn
    builder.addCase(fetchAsyncLogin.pending, (state) => {
      state.loadingResponseLogin = 'pending';
    });
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      state.dataResponseLogin = action.payload;
      state.loadingResponseLogin = 'succeeded';
      state.loadingResponseLogout = null;
      state.errorResponseLogin = null;
    });
    builder.addCase(fetchAsyncLogin.rejected, (state, action) => {
      state.loadingResponseLogin = 'failed';
      state.errorResponseLogin = action.error.message;
    });

    // LogOut
    builder.addCase(fetchAsyncLogout.pending, (state) => {
      state.loadingResponseLogout = 'pending';
      state.dataResponseLogin = null;
    });
    builder.addCase(fetchAsyncLogout.fulfilled, (state) => {
      state.loadingResponseLogout = 'succeeded';
      state.dataResponseLogin = null;
      state.loadingResponseLogin = null;
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

export const selectAccessToken = (state) =>
  state.auth.dataResponseLogin?.access_token;
export const selectStatusLogin = (state) => state.auth.loadingResponseLogin;
export const selectStatusLogout = (state) => state.auth.loadingResponseLogout;
export const selectIsErrorLogin = (state) => state.auth.errorResponseLogin;

export const {} = authorizationSlice.actions;

export default authorizationSlice.reducer;
