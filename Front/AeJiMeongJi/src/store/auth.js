import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const initialState = {
  user: {},
  token: '',
  isAuthenticated: false,
  phoneUUID: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    authenticate(state, action) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken
      console.log(action.payload.refreshToken, 'refresh');
      state.isAuthenticated = true;
    },
    logout(state) {
      state.token = null;
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('refresh');
      isAuthenticated = false;
    },
    fetchInfo(state, action) {
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
    fetchPhoneUUID(state, action) {
      console.log(action);
      state.phoneUUID = action.payload.phoneUUID;
      console.log(state.phoneUUID);
    },
    deleteMember(state) {
      state.token = null;
      AsyncStorage.removeItem('token'), (isAuthenticated = false);
      console.log('삭제 완료');
    },
  },
});

export const authActions = authSlice.actions;
