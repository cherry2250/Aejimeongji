import React from 'react';
import {Image} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RunningHome from '../screens/Running/RunningHome';
import PlaceHome from '../screens/Place/PlaceHome';
import MyPage from '../screens/Profile/MyPage';

import {Colors} from '../constants/styles';
import {useSelector} from 'react-redux';
import HomeStack from './HomeStack';
import GuideHome from '../screens/Guide/GuideHome';
import PlaceStack from './PlaceStack';
import GuideStack from './GuideStack';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.contentBox,
            height: responsiveHeight(7),
            borderTopLeftRadius: responsiveWidth(4.5),
            borderTopRightRadius: responsiveWidth(4.5),
          },
        }}
        initialRouteName="Home">
        <BottomTab.Screen
          name="산책"
          component={RunningHome}
          options={{
            unmountOnBlur: true,
            tabBarIcon: () => {
              return (
                <Image
                  style={{
                    width: responsiveWidth(7),
                    height: responsiveWidth(7),
                  }}
                  resizeMode="contain"
                  source={require('../Assets/image/navbar/running.png')}
                />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="가이드"
          component={GuideStack}
          options={{
            // unmountOnBlur: true,
            tabBarIcon: () => {
              return (
                <Image
                  style={{
                    width: responsiveWidth(7),
                    height: responsiveWidth(7),
                  }}
                  resizeMode="contain"
                  source={require('../Assets/image/navbar/guide.png')}
                />
              );
            },
          }}
        />

        <BottomTab.Screen
          name="Home"
          component={HomeStack}
          options={{
            unmountOnBlur: true,
            tabBarIcon: () => {
              return (
                <Image
                  style={{
                    width: responsiveWidth(15),
                    height: responsiveWidth(15),
                  }}
                  resizeMode="contain"
                  source={require('../Assets/image/home-logo.png')}
                />
              );
            },
          }}
        />

        <BottomTab.Screen
          name="플레이스"
          component={PlaceStack}
          options={{
            unmountOnBlur: true,
            tabBarIcon: () => {
              return (
                <Image
                  style={{
                    width: responsiveWidth(7),
                    height: responsiveWidth(7),
                  }}
                  resizeMode="contain"
                  source={require('../Assets/image/navbar/place.png')}
                />
              );
            },
          }}
        />
        <BottomTab.Screen
          name="마이페이지"
          component={MyPage}
          options={{
            unmountOnBlur: true,
            tabBarIcon: () => {
              return (
                <Image
                  style={{
                    width: responsiveWidth(7),
                    height: responsiveWidth(7),
                  }}
                  resizeMode="contain"
                  source={require('../Assets/image/navbar/profile.png')}
                />
              );
            },
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}

export default BottomTabNavigator;
