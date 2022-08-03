import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import Button from '../ui/Button';
import Input from './Input';
import axios from 'axios';
import { login } from '../../utils/auth';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const inputChangeHandler = (inputIdentifier, enterdValue) => {
    setInputValues(curValue => {
      return {
        ...curValue,
        [inputIdentifier]: enterdValue,
      };
    });
  };


  const submitHandler = async () => {
    const emailRegex = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/

    const emailIsValid = emailRegex.test(inputValues.email);
    const passwordIsValid = inputValues.password.length > 8;

    if (!emailIsValid) {
      Alert.alert('email 확인해주세요');
      return;
    } else if (!passwordIsValid) {
      Alert.alert('password가 짧습니다.');
      return;
    }


    const res = await login(inputValues.email, inputValues.password);
    console.log(res.data.accessToken, 'access token');
    await dispatch(authActions.authenticate({token: res.data.accessToken}));
    navigation.navigate('Home')
  };

  return (
    <View>
      <Input
        textInputConfig={{
          value: inputValues.email,
          placeholder: 'email',
          autoCapitalize: 'none',
          autoFocus: true,
          onChangeText: inputChangeHandler.bind(this, 'email'),
        }}
      />
      <Input
        textInputConfig={{
          value: inputValues.password,
          placeholder: 'password',
          autoCapitalize: 'none',
          secureTextEntry: true,
          onChangeText: inputChangeHandler.bind(this, 'password'),
        }}
      />
      <View style={styles.btnContainer}>
        <Button style={styles.btn} onPress={submitHandler}>
          로그인
        </Button>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    width: 200,
    marginTop: 24,
    alignSelf: 'center',
  },
});
