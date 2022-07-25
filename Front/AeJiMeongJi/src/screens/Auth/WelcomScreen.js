import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../constants/styles';
import Button from '../../components/ui/Button';

const WelcomeScreen = props => {
  return (
    <View style={styels.rootContainer}>
      <View>
        <Image
          style={styels.logo}
          // source={require('../../Assets/image/smallLogo.png')}
          resizeMode="contain"
        />
        <View style={styels.btnOuterContainer}>
          <View style={styels.btnInnerContainer}>
            <Button>로그인</Button>
          </View>
          <View style={styels.btnInnerContainer}>
            <Button>회원가입</Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styels = StyleSheet.create({
  rootContainer: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logo: {
    flex: 1,
    marginTop: 50,
    maxWidth: '60%',
    maxHeight: '30%',
  },
  btnOuterContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  btnInnerContainer: {
    marginTop: 16,
  },
});
