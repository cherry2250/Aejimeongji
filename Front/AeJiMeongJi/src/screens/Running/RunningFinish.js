import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import RunButton from '../../components/ui/RunButton';

const RunningFinish = () => {
  return (
    <View>
      <Text>산책 종료 페이지에요</Text>
    </View>
  );
};

export default RunningFinish;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: 11,
    paddingHorizontal: 28,
    backgroundColor: Colors.btnBack100,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.btnText,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
