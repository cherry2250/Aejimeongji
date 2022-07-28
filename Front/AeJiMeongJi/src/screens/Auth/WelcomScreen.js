import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../constants/styles';
import Button from '../../components/ui/Button';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

// const Stack = createNativeStackNavigator();

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Signup" component={SignupScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styels.rootContainer}>
      <View>
        {/* <Image
          style={styels.logo}
          source={require('../../Assets/image/smallLogo.png')}
          resizeMode="contain"
        /> */}
        <View style={styels.btnOuterContainer}>
          <View style={styels.btnInnerContainer}>
            <Button
              onPress={() => {
                navigation.navigate('Login');
              }}>
              로그인
            </Button>
          </View>
          <View style={styels.btnInnerContainer}>
            <Button
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              회원가입
            </Button>
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
    backgroundColor: Colors.back100,
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
