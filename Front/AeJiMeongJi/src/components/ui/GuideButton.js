import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/styles';

function GuideButton({children, onPress}) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default GuideButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#E6E6E6',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginLeft: 10,
    marginBottom: 30,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: '#6E6E6E',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
