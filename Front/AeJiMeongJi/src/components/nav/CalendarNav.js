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

const CalendarNav = ({source, children}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <Pressable
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../Assets/image/logo2.png')}
        />
      </Pressable>
    </View>
  );
};

export default CalendarNav;

const styles = StyleSheet.create({
  logo: {
    marginTop: 5,
    maxWidth: responsiveWidth(24),
    maxHeight: responsiveHeight(7),
  },
});
