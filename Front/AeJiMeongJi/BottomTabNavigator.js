import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RunningHome from './src/screens/Running/RunningHome';
import MainHome from './src/screens/Home/MainHome';
import GuideHome from './src/screens/Guide/GuideHome';

import Initial from './src/screens/Initial';
import {Colors} from './src/constants/styles';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.contentBox,
          height: 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
      initialRouteName="Initial">
      <BottomTab.Screen
        name="Initial"
        component={Initial}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{
                  width: '60%',
                  height: '60%',
                }}
                resizeMode="contain"
                source={require('./src/Assets/image/navbar/place.png')}
              />
            );
          },
        }}
      />

      <BottomTab.Screen
        name="RunningHome"
        component={RunningHome}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{
                  width: '60%',
                  height: '60%',
                }}
                resizeMode="contain"
                source={require('./src/Assets/image/navbar/running.png')}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="GuideHome"
        component={GuideHome}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{
                  width: '60%',
                  height: '60%',
                }}
                resizeMode="contain"
                source={require('./src/Assets/image/navbar/guide.png')}
              />
            );
          },
        }}
      />

      <BottomTab.Screen
        name="Home"
        component={MainHome}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{
                  width: 80,
                  height: 80,
                }}
                resizeMode="contain"
                source={require('./src/Assets/image/home-logo.png')}
              />
            );
          },
        }}
      />
      {/* <BottomTab.Screen name="GuideHome" component={GuideHome} />
      <BottomTab.Screen name="GuideHome" component={GuideHome} /> */}
    </BottomTab.Navigator>
  );
}


export default BottomTabNavigator;
