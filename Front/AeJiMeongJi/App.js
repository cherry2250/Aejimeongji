import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import MainHome from './src/screens/Home/MainHome';
import Initial from './src/screens/Initial';
import Running from './src/screens/Running/Running';


const Stack = createNativeStackNavigator();

// 파일을 만들어서, 홈, 산책, 온보딩으로 전달한다.

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Running" component={Running} />
      <Stack.Screen name="Home" component={MainHome} />
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
