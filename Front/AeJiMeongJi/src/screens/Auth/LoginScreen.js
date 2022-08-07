import axios from 'axios';
import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import LoginForm from '../../components/Auth/LoginForm';
import Button from '../../components/ui/Button';
import {Colors} from '../../constants/styles';

const LoginScreen = () => {


  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>로그인</Text>
      </View>
      <View style={styles.inputContainer}>
        <LoginForm />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.back100,
  },
  titleContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
  },
  title: {
    color: Colors.btnBack100,
    fontWeight: 'bold',
    fontSize: 36,
  },
  inputContainer: {
    flex: 3,
  },
  input: {
    minWidth: '70%',
    paddingHorizontal: 10,
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.inputBorder,
  },
  btn: {
    flex: 1,
    marginTop: 16,
  },
});
