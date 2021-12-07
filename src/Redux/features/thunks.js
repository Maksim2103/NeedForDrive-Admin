import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/rootAPI';
import { basicString } from '../../utils/authStrings';

const fetchAsyncLogin = createAsyncThunk(
  'auth/login/fetchAsyncLogin',
  async (json, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/login', json, {
        headers: {
          Authorization: basicString,
        },
      });
      sessionStorage.setItem('access_token', response.data.access_token);
      sessionStorage.setItem('refresh_token', response.data.refresh_token);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  },
);

const fetchAsyncLogout = createAsyncThunk(
  'auth/logout/fetchAsyncLogout',
  async (bearerString, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        '/auth/logout',
        {},
        {
          headers: {
            Authorization: bearerString,
          },
        },
      );
      sessionStorage.removeItem('access_token');
      sessionStorage.removeItem('refresh_token');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  },
);

const fetchAsyncRefreshToken = createAsyncThunk(
  'auth/refresh/fetchAsyncRefreshToken',
  async (json, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/refresh', json);
      sessionStorage.setItem('access_token', response.data.access_token);
      sessionStorage.setItem('refresh_token', response.data.refresh_token);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.status);
    }
  },
);

export { fetchAsyncLogin, fetchAsyncRefreshToken, fetchAsyncLogout };
