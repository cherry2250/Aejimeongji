import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './auth';
import {profileSlice} from './profile';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profile: profileSlice.reducer,
  },
});

export default store;
