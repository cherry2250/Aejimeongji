import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Colors} from '../../constants/styles';

const ProfileInput = ({textInputConfig, style}) => {
  return (
    <View>
      <TextInput style={[styles.input, style]} {...textInputConfig} />
    </View>
  );
};

export default ProfileInput;

const styles = StyleSheet.create({
  input: {
    minWidth: '70%',
    paddingHorizontal: 10,
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.ProfileInputBorder,
    backgroundColor: Colors.ProfileInputBorder,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
