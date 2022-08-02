import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import MainHome from './src/screens/Home/MainHome';
import Initial from './src/screens/Initial';
import LoginScreen from './src/screens/Auth/LoginScreen';
import SignupScreen from './src/screens/Auth/SignupScreen';
import RunningHome from './src/screens/Running/RunningHome';
import GuideHome from './src/screens/Guide/GuideHome';
import GuideCategory from './src/screens/Guide/GuideCategory';
import GuideDetail from './src/screens/Guide/GuideDetail';
import CalendarHome from './src/screens/Calendar/CalendarHome';
import TodoUpload from './src/screens/Calendar/TodoUpload';

const Stack = createNativeStackNavigator();

// 파일을 만들어서, 홈, 산책, 온보딩으로 전달한다.

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Running" component={RunningHome} />
      <Stack.Screen name="Home" component={MainHome} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Guide" component={GuideHome} />
      <Stack.Screen name="GuideCategory" component={GuideCategory} />
      <Stack.Screen name="GuideDetail" component={GuideDetail} />
      <Stack.Screen name="Calendar" component={CalendarHome} />
      <Stack.Screen name="TodoUpload" component={TodoUpload} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  // 자동 로그인 기능
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchToken = async () => {
  //     const storedToken = await AsyncStorage.getItem('token');
  //     if (storedToken) {
  //       dispatch(authActions.authenticate({token: storedToken}));
  //     }
  //   };
  //   fetchToken();
  // }, []);
  return (
    <NavigationContainer>
      {isAuthenticated && <AuthenticatedStack />}
      {!isAuthenticated && <AuthStack />}
    </NavigationContainer>
  );
};

const Root = () => {
  return <Navigation />;
};

import store from './src/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {authActions} from './src/store/auth';
import AuthStack from './src/navigation/AuthStack';
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Root />
    </Provider>
  );
}
