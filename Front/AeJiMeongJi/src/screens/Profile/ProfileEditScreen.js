import React, {useLayoutEffect, useState} from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/ui/Button';
import {Button as Btn} from '@rneui/themed';
import ProfileInput from '../../components/Profile/ProfileInput';
import {Colors} from '../../constants/styles';
import Weight from '../../components/Profile/Weight';
import {useNavigation} from '@react-navigation/native';

const ProfileEditScreen = () => {
  const navigation = useNavigation();

  const [source, setSource] = useState(null);
  const [dogInfo, setDogInfo] = useState({
    id: '',
    name: '',
    weight: '',
    birthdate: '',
    adoptedDay: '',
    breed: '',
  });

  const deleteProfileHandler = async () => {
    const message = await deleteProfileHandler(dogInfo.id);
    Alert.alert(message, [
      {text: '네', onPress: () => navigation.navigate('Choice')},
    ]);
  };

  //   useLayoutEffect(() => {
  //     // 강아지 이미지 및 프로필 조회
  //     const dogInfo = async () => {};
  //   }, []);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode="contain" source={source} />
        <View style={styles.profileInputContainer}>
          <ProfileInput
            textInputConfig={{
              placeholder: '반려견 이름',
              placeholderTextColor: '#6D6D6D',
              // onChangeText: inputChangeHandler,
            }}
            style={styles.profileInput}
            //   visible={visible}
          />
        </View>
      </View>
      <View style={styles.weightBox}>
        <Text style={styles.subTitle}>몸무게</Text>
        <Weight
        // weight={inputValues.weight}
        // setWeight={inputChangeHandler.bind(this, 'weight')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button>적용</Button>
        <Btn title="프로필 삭제 하기" onPress={deleteProfileHandler} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileEditScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.back100,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  profileInputContainer: {
    justifyContent: 'center',
  },
  profileInput: {
    width: '50%',
    marginLeft: 20,
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
  weightBox: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  subTitle: {
    color: '#90560D',
    fontSize: 13,
  },
  buttonContainer: {
    flex: 1,
  },
});
