import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constants/styles';

const PlaceNavbar = ({source, children, logo}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <Pressable
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          style={styles.profilelogo}
          resizeMode="contain"
          source={{uri: source}}
        />
      </Pressable>
      <View style={styles.textContainer}>
        {logo && (
          <Image source={logo} resizeMode="contain" style={styles.logo} />
        )}
        {children && <Text style={styles.text}>{children}</Text>}
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('CalendarHome');
        }}
        style={styles.calendarContainer}>
        <Image
          style={styles.calendarLogo}
          resizeMode="contain"
          source={require('../../Assets/image/calendarLogo.png')}
          title="Calendar"
        />
      </Pressable>
    </View>
  );
};

export default PlaceNavbar;

const styles = StyleSheet.create({
  //글꼴
  nav: {
    height: responsiveHeight(7),
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  // imageContainer: {
  //   height: responsiveHeight(20),
  //   width: responsiveHeight(20)
  // },
  contentbox: {
    justifyContent: 'center',
    backgroundColor: Colors.back100,
  },
  profilelogo: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(12),
    marginLeft: responsiveWidth(4),
  },
  logo: {
    height: responsiveHeight(3),
  },
  calendarLogo: {
    width: responsiveWidth(8),
    height: responsiveHeight(8),
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
  },
  calendarContainer: {
    marginRight: responsiveWidth(4),
    height: responsiveHeight(8),
  },
  text: {
    fontFamily: '강원교육튼튼',
  },
});
