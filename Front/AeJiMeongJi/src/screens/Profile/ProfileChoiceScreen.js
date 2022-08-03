import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Colors } from '../../constants/styles';

const ProfileChoiceScreen = () => {
  return (
    <>
      <View style={styles.profile}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../Assets/image/박베리.png')}
        />
      </View>
    </>
  );
};

export default ProfileChoiceScreen;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
  },
  image: {
    width: 132,
    height: 132,
    borderRadius: 100,
    borderColor: Colors.contentText,
    borderWidth: 2,
  }
});
