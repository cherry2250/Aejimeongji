import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './auth';
import {placeSlice} from './place';
import {profileSlice} from './profile';
import {runningSlice} from './running';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    profile: profileSlice.reducer,
    running: runningSlice.reducer,
  },
});

export default store;
