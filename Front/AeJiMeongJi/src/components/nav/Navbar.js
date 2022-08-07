import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../constants/styles';

const navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <Image
        style={styles.profilelogo}
        resizeMode="contain"
        source={require('../../Assets/image/박베리.png')}
      />
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../../Assets/image/logo2.png')}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CalendarHome');
        }}
        style={{paddingLeft: 24}}>
        <Image
          style={styles.calendarLogo}
          resizeMode="contain"
          source={require('../../Assets/image/calendarLogo.png')}
          title="Calendar"
        />
      </TouchableOpacity>
    </View>
  );
};

export default navbar;

const styles = StyleSheet.create({
  //글꼴
  font: {
    fontFamily: 'ONE Mobile POP',
    letterSpacing: 4,
    color: Colors.contentText,
  },
  contentFont: {
    fontFamily: 'ONE Mobile Regular',
    fontWeight: 'bold',
  },
  nav: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentbox: {
    flex: 14,
    justifyContent: 'center',
    backgroundColor: Colors.back100,
  },
  profilelogo: {
    marginTop: 5,
    marginRight: 10,
    maxWidth: '22%',
    maxHeight: '60%',
  },
  logo: {
    marginTop: 5,
    maxWidth: '50%',
    maxHeight: '60%',
  },
  calendarLogo: {
    marginTop: 5,
    marginRight: 10,
    maxWidth: '40%',
    maxHeight: '70%',
  },
});
