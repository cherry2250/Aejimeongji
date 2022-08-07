import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProfileHomeScreen from '../screens/Profile/ProfileHomeScreen';
import ProfileHomeScreen2 from '../screens/Profile/ProfileHomeScreen2';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return <Stack.Navigator>
    <Stack.Screen name="profileHome" component={ProfileHomeScreen} />
    <Stack.Screen name="profileHome2" component={ProfileHomeScreen2} />
  </Stack.Navigator>;
};

export default ProfileStack;
