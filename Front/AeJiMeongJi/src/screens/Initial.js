import React from 'react';
import {Image, StyleSheet, View, Text, Button} from 'react-native';
import {Colors} from '../../constants/styles';
import {StackActions} from '@react-navigation/native';

const Initial = ({navigation}) => {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="Home"></Button>
      <Button
        onPress={() => {
          navigation.navigate('Welcome');
        }}
        title="Welcome"></Button>
      <Button
        onPress={() => {
          navigation.navigate('Running');
        }}
        title="Running"></Button>
    </View>
  );
};

export default Initial;
