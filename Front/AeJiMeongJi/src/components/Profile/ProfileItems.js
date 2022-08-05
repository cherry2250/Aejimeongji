import React from 'react';
import {Image, Text, View} from 'react-native';
import {Pressable, StyleSheet} from 'react-native';
import {Colors} from '../../constants/styles';

const ProfileItems = ({source, id}) => {
  const onPress = () => {
    console.log(`${id}번 강쥐클릭`);
  };

  return (
    <Pressable onPress={onPress}>
      <View style={styles.profile}>
        {/* <Text>{title}</Text> */}
        <Image style={styles.image} resizeMode="contain" source={source} />
      </View>
    </Pressable>
  );
};

export default ProfileItems;

const styles = StyleSheet.create({
  profile: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: 132,
    height: 132,
    borderRadius: 100,
    borderColor: Colors.contentText,
    borderWidth: 2,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
