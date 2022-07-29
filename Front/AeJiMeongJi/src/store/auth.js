import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';


const initialState = {
  user: {},
  token: '',
  isAuthenticated: false,
  phoneUUID: ''
};


export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    authenticate(state, action) {
      state.token = action.payload.token;
      AsyncStorage.setItem('token', res.data.accessToken);
      isAuthenticated = true
    },
    logout(state) {
      state.token = null;
      AsyncStorage.removeItem('token')
      isAuthenticated = false
    },
    fetchInfo(state, action) {
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
    fetchPhoneUUID(state, action) {
      state.phoneUUID = action.payload.phoneUUID
    }
  },
});

export const authActions = authSlice.actions;
