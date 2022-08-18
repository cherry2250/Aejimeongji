import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../../constants/styles';

const Input = ({textInputConfig, style}) => {
  return (
    <View>
      <TextInput style={[styles.input, style]} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    minWidth: '70%',
    paddingHorizontal: 10,
    marginTop: 36,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.contentText,
  },
});
