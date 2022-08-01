import React from 'react';
import {StyleSheet, View} from 'react-native';

const ProgressBar = ({style}) => {
  return <View style={[styels.progressBar, style]}></View>;
};

export default ProgressBar;

const styels = StyleSheet.create({
  progressBar: {
    width: '100%',
    opacity: 0.6,
    height: 10,
    backgroundColor: '#DD9944',
    borderWidth: 3,
    borderRadius: 12,
    borderColor: '#DD9944',
    flexDirection: 'row',
  },
});
