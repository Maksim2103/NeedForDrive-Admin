import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  axiosInstanceBasic,
  axiosInstanceBearer,
} from '../../services/rootAPI';

const fetchAsyncRegister = createAsyncThunk(
  'auth/register/fetchAsyncRegister',
  async (json) => {
    try {
      const response = await axiosInstanceBasic.post('/auth/register', json);
      return response.data;
    } catch (error) {
      return console.log(error.response.status);
    }
  },
);

const fetchAsyncLogin = createAsyncThunk(
  'auth/login/fetchAsyncLogin',
  async (json) => {
    try {
      const response = await axiosInstanceBasic.post('/auth/login', json);
      sessionStorage.setItem('access_token', response.data.access_token);
      sessionStorage.setItem('refresh_token', response.data.refresh_token);
      return response.data;
    } catch (error) {
      return console.log(error.response.status);
    }
  },
);

const fetchAsyncLogout = createAsyncThunk(
  'auth/logout/fetchAsyncLogout',
  async (json) => {
    try {
      const response = await axiosInstanceBearer.post('/auth/logout', json);
      sessionStorage.removeItem('access_token');
      sessionStorage.removeItem('refresh_token');
      return response.data;
    } catch (error) {
      return console.log(error.response.status);
    }
  },
);

const fetchAsyncRefreshToken = createAsyncThunk(
  'auth/refresh/fetchAsyncRefreshToken',
  async (json) => {
    try {
      const response = await axiosInstanceBasic.post('/auth/refresh', json);
      sessionStorage.setItem('access_token', response.data.access_token);
      sessionStorage.setItem('refresh_token', response.data.refresh_token);
      return response.data;
    } catch (error) {
      return console.log(error.response.status);
    }
  },
);

export {
  fetchAsyncRegister,
  fetchAsyncLogin,
  fetchAsyncRefreshToken,
  fetchAsyncLogout,
};
