import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {Colors} from '../../constants/styles';

const ToddUpload = props => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.nav}>
        <Image
          style={styles.none}
          resizeMode="contain"
          source={require('../../Assets/image/calendarLogo.png')}
        />
        <Image
          style={styles.logo2}
          resizeMode="contain"
          source={require('../../Assets/image/logo2.png')}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TodoUpload');
          }}
          style={{paddingLeft: 24}}>
          <Image
            style={styles.none}
            resizeMode="contain"
            source={require('../../Assets/image/calendarLogo.png')}
            title="Calendar"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contentbox}></View>
    </View>
  );
};
export default ToddUpload;

const styles = StyleSheet.create({
  font: {
    fontFamily: 'ONE Mobile POP',
  },
  contentFont: {
    fontFamily: 'ONE Mobile Regular',
    fontWeight: 'bold',
  },

  mainText: {
    fontSize: 20,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },
  subText: {
    fontSize: 18,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },

  contentText: {
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 2,
    color: Colors.contentText,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.back100,
  },
  nav: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentbox: {
    justifyContent: 'center',
    backgroundColor: Colors.back100,
  },
  none: {
    marginTop: 5,
    marginRight: 10,
    maxWidth: '20%',
    maxHeight: '80%',
    opacity: 0,
  },
  logo2: {
    marginTop: 5,
    maxWidth: '50%',
    maxHeight: '60%',
  },
  runicon: {
    marginTop: 5,
    maxWidth: '70%',
    maxHeight: '60%',
  },
  calendarLogo: {
    marginTop: 5,
    marginRight: 10,
    maxWidth: '40%',
    maxHeight: '80%',
  },
  logo: {
    marginTop: 50,
    maxWidth: '60%',
    maxHeight: '30%',
  },
});
