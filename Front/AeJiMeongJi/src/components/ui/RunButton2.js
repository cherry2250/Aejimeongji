import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/styles';

<<<<<<<< HEAD:Front/AeJiMeongJi/src/components/ui/RunButton2.js
function RunButton2({ children, onPress }) {
========
function RunButton({ children, onPress }) {
>>>>>>>> feature/front/프로필:Front/AeJiMeongJi/src/components/ui/RunButton.js
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

<<<<<<<< HEAD:Front/AeJiMeongJi/src/components/ui/RunButton2.js
export default RunButton2;
========
export default RunButton;
>>>>>>>> feature/front/프로필:Front/AeJiMeongJi/src/components/ui/RunButton.js

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: 11,
    paddingHorizontal: 28,
<<<<<<<< HEAD:Front/AeJiMeongJi/src/components/ui/RunButton2.js
    backgroundColor: '#DDB244',
========
    backgroundColor: Colors.btnBack100,
>>>>>>>> feature/front/프로필:Front/AeJiMeongJi/src/components/ui/RunButton.js
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.btnText,
    fontSize: 18,
    fontWeight: 'bold'
  },
});