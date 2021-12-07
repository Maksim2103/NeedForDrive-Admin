import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './features/authReducer/authtorizationSlice';

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export default store;
