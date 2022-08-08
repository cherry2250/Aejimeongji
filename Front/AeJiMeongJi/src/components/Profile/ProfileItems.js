import React from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {Pressable, StyleSheet, ImageBackground} from 'react-native';
import {Colors} from '../../constants/styles';
import {getImage} from '../../utils/profile';
import {useSelector, useDispatch} from 'react-redux';
import {profileActions} from '../../store/profile';
import {useNavigation} from '@react-navigation/native';
import {getMemberId} from '../../utils/auth';

const ProfileItems = ({source, id, purpose, isEditing, name}) => {
  let img = null;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const changeDogHandler = async id => {
    // 강아지 정보 조회 후 redux에 현재 강아지 정보 저장

    Alert.alert(`${name} 강아지로 변경 되었어요.`);
    await dispatch(profileActions.saveDogid({id}));
    console.log('강쥐 변경 완료');
    navigation.navigate('Home', {dogId:id})
  };

  const changeProfileHandler = async id => {
    const memberId = await getMemberId();
    console.log(memberId);
    navigation.navigate('ProfileChange', {dogId:id});
  };

  const editingImg = require('../../Assets/image/editing.png');

  const onPress = async () => {
    console.log(`${id}번 강쥐클릭`);

    if (purpose) {
      Alert.alert('프로필 추가 하시겠어요?', '',[
        {
          text: '아니요',
          style: 'cancel',
        },
        {text: '네', onPress: () => navigation.navigate('ProfileHome')},
      ]);
    }

    if (isEditing && !purpose) {
      Alert.alert('프로필 수정', '프로필 수정 하시겠어요?', [
        {
          text: '아니요',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: '네', onPress: changeProfileHandler.bind(this, id)},
      ]);
    } else if (!isEditing && !purpose) {
      Alert.alert('프로필 변경', `${name} 강아지로 변경하시겠어요?`, [
        {
          text: '아니요',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: '네', onPress: changeDogHandler.bind(this, id)},
      ]);
      // const res = await getImage();
      // img = res;
      // console.log(img);
    }
  };

  let addIcon = null;
  const imageAddBtn = require('../../Assets/image/plusButton.png');

  const addProfileHandler = () => {
    console.log('프로필 추가 합시다.');
  };

  return (
    <Pressable onPress={onPress}>
      <View style={styles.profile}>
        {/* <Text>{title}</Text> */}
        <Image
          style={[styles.image, isEditing && !purpose && styles.editing]}
          resizeMode="contain"
          source={source}
        />
        {isEditing && !purpose && (
          <Image
            style={styles.grayscale}
            resizeMode="contain"
            source={editingImg}
          />
        )}

        <Text style={styles.name}>{name}</Text>
        {purpose && (
          <Pressable onPress={addProfileHandler}>
            <Image source={imageAddBtn} style={styles.imageAddBtn} />
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};

export default ProfileItems;

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    position: 'relative',
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
  imageAddBtn: {
    position: 'absolute',
    borderRadius: 90,
    width: 40,
    height: 40,
    left: 20,
    bottom: 30,
  },
  editing: {
    opacity: 0.5,
    backgroundColor: 'gray',
  },
  grayscale: {
    width: 132,
    height: 132,
    borderRadius: 100,
    position: 'absolute',
    // opacity: 0.3,
    top: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#90560D',
  },
});
