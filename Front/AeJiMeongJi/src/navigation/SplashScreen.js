import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const SplashScreen = () => {
  return <View style={styles.rootContainer}>{/* 이미지 삽입 */}
  <Text>여기는 SplashScreen</Text>
  </View>;
};

const styles = StyleSheet.create({
  rootContainer: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
});

export default SplashScreen;
