import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import Button from '../ui/Button';
import Input from './Input';
import {useSelector} from 'react-redux';
import {register} from '../../utils/auth';
import PhoneAuth from './PhoneAuth';

const SignupForm2 = () => {
  const email = useSelector(state => state.auth.user.email);
  const password = useSelector(state => state.auth.user.password);
  const navigation = useNavigation();
  const [inputValues, setInputValues] = useState({
    email,
    password,
    name: '',
    nickname: '',
    phone: '',
  });
  const [phoneIsAuthenticated, setPhoneIsAuthenticated] = useState();
  // regex
  const nameRegex = /^[가-힣]{2,4}$/;
  const nicknameRegex = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;
  const phoneRegex = /^[0-9]{0,11}$/;

  // 유효성
  const nameIsValid = nameRegex.test(inputValues.name);
  const nicknameIsValid = nicknameRegex.test(inputValues.nickname);
  const phoneIsValid = phoneRegex.test(inputValues.phone);

  const [errors, setErrors] = useState({
    name: true,
    nickname: true,
    phone: true,
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues(curValue => {
      return {
        ...curValue,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const onBlurHandler = inputIdentifier => {
    setErrors(curValue => {
      switch (inputIdentifier) {
        case 'name':
          return {
            ...curValue,
            [inputIdentifier]: nameIsValid,
          };
        case 'nickname':
          return {
            ...curValue,
            [inputIdentifier]: nicknameIsValid,
          };
        case 'phone':
          return {
            ...curValue,
            [inputIdentifier]: phoneIsValid,
          };
        default:
          break;
      }
    });
  };

  // 클릭하면 서버에 문자 요청,

  const submitHandler = async () => {
    if (!nameIsValid) {
      Alert.alert('이름을 확인해주세요');
      return;
    } else if (!nicknameIsValid) {
      Alert.alert('닉네임을 확인해주세요');
      return;
    } else if (!phoneIsValid || inputValues.phone.length !== 11) {
      Alert.alert('휴대폰 번호를 확인해주세요.');
      return;
    } else if (!phoneIsAuthenticated) {
      Alert.alert('휴대폰 인증이 필요합니다.');
      return;
    }

    // backend에 쏨
    await register(inputValues);
    // 인증받고 홈으로
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Input
        textInputConfig={{
          value: inputValues.name,
          placeholder: '이름',
          autoCapitalize: 'none',
          // autoFocus: true,
          onChangeText: inputChangeHandler.bind(this, 'name'),
          onBlur: onBlurHandler.bind(this, 'name'),
        }}
        // style={!errors.email && !emailIsValid ? styles.input : null}
      />
      <Input
        textInputConfig={{
          value: inputValues.nickname,
          placeholder: '닉네임',
          autoCapitalize: 'none',
          onChangeText: inputChangeHandler.bind(this, 'nickname'),
          onBlur: onBlurHandler.bind(this, 'nickname'),
        }}
        // style={!errors.password && !passwordIsValid ? styles.input : null}
      />
      <PhoneAuth
        inputValues={inputValues}
        inputChangeHandler={inputChangeHandler}
        onBlurHandler={onBlurHandler}
        errors={errors}
        phoneIsValid={phoneIsValid}
      />
      <View style={styles.btnContainer}>
        <Button style={styles.btn} onPress={submitHandler}>
          회원가입
        </Button>
      </View>
    </View>
  );
};

export default SignupForm2;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  btnContainer: {
    flex: 1,
    width: 200,
    marginTop: 24,
    alignSelf: 'center',
  },
  input: {
    borderColor: 'red',
  },
  errorMessage: {
    fontSize: 8,
    fontWeight: 'bold',
    marginTop: 4,
    color: 'red',
    paddingLeft: 8,
  },
  phone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnCntr: {
    paddingHorizontal: 5,
  },
  btn: {
    flex: 1,
    paddingHorizontal: 30,
  },
  cntr: {
    minWidth: '30%',
  },
});
