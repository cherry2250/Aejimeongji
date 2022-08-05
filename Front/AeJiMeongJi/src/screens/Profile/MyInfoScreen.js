import React, {useLayoutEffect, useState} from 'react';
import ProfileInput from '../../components/Profile/ProfileInput';
import Button from '../../components/ui/Button';
import {Button as Btn} from '@rneui/themed';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import {changeProfile, getProfile} from '../../utils/profile';
import { Colors } from '../../constants/styles';

const MyInfoScreen = ({navigation}) => {
  console.log('rendering');
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    email: '',
    phoneNumber: '',
    createdDate: '',
  });

  useLayoutEffect(() => {
    const initialValue = async () => {
      const res = await getProfile();
      setUserInfo(res);
      console.log(userInfo, '인포');
    };
    initialValue();
  }, []);

  const changeInfoHandler = async () => {
    const res = await changeProfile(userInfo.nickname);

    if (res) {
      Alert.alert('프로필이 변경 되었습니다.');
      navigation.replace('Home');
    }
  };

  const changeNickNameHandler = async enteredValue => {
    setUserInfo(curValue => {
      return {
        ...curValue,
        nickname: enteredValue,
      };
    });
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ProfileInput
        textInputConfig={{
          placeholder: userInfo.email,
          editable: false,
        }}
      />
      <ProfileInput
        textInputConfig={{
          placeholder: userInfo.nickname,
          onChange: changeNickNameHandler,
        }}
      />
      <ProfileInput
        textInputConfig={{
          placeholder: userInfo.phoneNumber,
          editable: false,
        }}
      />
      <ProfileInput
        textInputConfig={{
          placeholder: userInfo.createdDate,
          editable: false,
        }}
      />
      <Button onPress={changeInfoHandler}>프로필 변경 </Button>
      <Btn title='회원탈퇴' />
    </SafeAreaView>
  );
};

export default MyInfoScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.back100
  }
})