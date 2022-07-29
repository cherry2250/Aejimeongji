import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen2 from '../screens/Auth/SignupScreen2';
import WelcomeScreen from '../screens/Auth/WelcomScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import Initial from '../screens/Initial';
import MainHome from '../screens/Home/MainHome';
import {CardStyleInterpolators} from '@react-navigation/stack';
import RunningHome from '../screens/Running/RunningHome';

const Stack = createNativeStackNavigator();

// 로그인 back 연동 후 Initial, running mainhome 삭제
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="RunningHome" component={RunningHome} />
      <Stack.Screen name="Home" component={MainHome} />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen name="Signup2" component={SignupScreen2} />
    </Stack.Navigator>
  );
};

export default AuthStack;
