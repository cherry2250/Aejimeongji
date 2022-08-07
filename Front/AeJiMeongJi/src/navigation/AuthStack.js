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
import RunningGeolocation from '../screens/Running/RunningGeolocation';
import RunningInfo from '../screens/Running/RunningInfo';
import RunningProfile from '../screens/Running/RunningProfile';
import ProfileHomeScreen from '../screens/Profile/ProfileHomeScreen';
import ProfileHomeScreen2 from '../screens/Profile/ProfileHomeScreen2';
import ProfileChoiceScreen from '../screens/Profile/ProfileChoiceScreen';
import GuideHome from '../screens/Guide/GuideHome';
import GuideDetail from '../screens/Guide/GuideDetail';
import GuideCategory from '../screens/Guide/GuideCategory';
import CalendarHome from '../screens/Calendar/CalendarHome';
import TodoUpload from '../screens/Calendar/TodoUpload';
import ProfileEditScreen from '../screens/Profile/ProfileEditScreen';
import MyInfoScreen from '../screens/Profile/MyInfoScreen';


const Stack = createNativeStackNavigator();

// 로그인 back 연동 후 Initial, running mainhome 삭제
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="RunningHome" component={RunningHome} />
      <Stack.Screen name="RunningInfo" component={RunningInfo} />
      <Stack.Screen name="RunningProfile" component={RunningProfile} />
      <Stack.Screen name="RunningGeolocation" component={RunningGeolocation} />
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
      <Stack.Screen name="ProfileHome" component={ProfileHomeScreen} />
      <Stack.Screen name="ProfileHome2" component={ProfileHomeScreen2} />
      <Stack.Screen name="Choice" component={ProfileChoiceScreen} />
      <Stack.Screen name="GuideHome" component={GuideHome} />
      <Stack.Screen name="GuideDetail" component={GuideDetail} />
      <Stack.Screen name="GuideCategory" component={GuideCategory} />
      <Stack.Screen name="CalendarHome" component={CalendarHome} />
      <Stack.Screen name="TodoUpload" component={TodoUpload} />
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
      <Stack.Screen name="MyInfo" component={MyInfoScreen} />

    </Stack.Navigator>
  );
};

export default AuthStack;
