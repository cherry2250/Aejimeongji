import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import store from './src/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import AuthStack from './src/navigation/AuthStack';

const Navigation = ({navigation}) => {
  // 자동 로그인 기능
  const [isLoading, setIsLoading] = useState(false);

  // if (isLoading) {
  //   return <SplashScreen />;
  // }

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  // useLayoutEffect(() => {
  //   const fetchToken = async () => {
  //     const storedToken = await AsyncStorage.getItem('token');
  //     if (storedToken) {
  //       console.log('이거 안됨?');
  //       await dispatch(authActions.authenticate({token: storedToken}));
  //       // member id불러오고
  //       const memberId = await getMemberId();
  //       console.log(memberId);
  //       // 강아지 ids를 불러옴
  //     }
  //   };
  //   fetchToken();
  // }, []);

  return (
    <NavigationContainer>
      {isAuthenticated && <BottomTabNavigator />}
      {!isAuthenticated && <AuthStack />}
    </NavigationContainer>
  );
};

const Root = () => {
  return <Navigation />;
};

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Root />
    </Provider>
  );
}
