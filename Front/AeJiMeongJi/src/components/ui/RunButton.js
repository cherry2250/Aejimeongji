import React from 'react';
<<<<<<< HEAD
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/styles';

function RunButton({children, onPress}) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
=======
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
>>>>>>> feature/front/프로필
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

<<<<<<< HEAD
export default RunButton;
=======
<<<<<<<< HEAD:Front/AeJiMeongJi/src/components/ui/RunButton2.js
export default RunButton2;
========
export default RunButton;
>>>>>>>> feature/front/프로필:Front/AeJiMeongJi/src/components/ui/RunButton.js
>>>>>>> feature/front/프로필

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: 11,
    paddingHorizontal: 28,
<<<<<<< HEAD
    backgroundColor: Colors.btnBack100,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginLeft: 10,
    marginRight: 10,
=======
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
>>>>>>> feature/front/프로필
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.btnText,
    fontSize: 18,
<<<<<<< HEAD
    fontWeight: 'bold',
  },
});
=======
    fontWeight: 'bold'
  },
});
>>>>>>> feature/front/프로필
