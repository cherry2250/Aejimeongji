import React, {useRef, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Input from './Input';
import {Button as Btn} from '@rneui/themed';
import {confirmCertHandler, fetchCertHandler, register} from '../../utils/auth';
import {useDispatch, useSelector} from 'react-redux';
import { authActions } from '../../store/auth';

const PhoneAuth = ({
  inputValues,
  inputChangeHandler,
  onBlurHandler,
  errors,
  phoneIsValid,
}) => {
  // 유저 폰 인증
  const [phoneIsAuthenticated, setPhoneIsAuthenticated] = useState(false);
  const [cert, setCert] = useState(null);
  const certRegex = /^[0-9]{6}$/;
  const certIsValid = certRegex.test(cert);
  const dispatch = useDispatch()
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(180);
  const timerId = useRef(null);
  const [loading, setLoading] = useState(false);
  const [phoneUUID, setPhoneUUID] = useState('')
  
  const phoneAuthHandler = async () => {
    // Loading 중일 때 버튼을 인증 요청 => 확인

    if (!phoneIsValid || inputValues.phone.length !== 11) {
      return Alert.alert('휴대폰 번호를 확인해주세요.');
    }

    if (!loading) {
      setLoading(true);
      timerId.current = setInterval(() => {
        setMin(parseInt(time.current / 60));
        setSec(time.current % 60);
        time.current -= 1;
      }, 1000);
      if (time.current <= 0) {
        clearInterval(timerId.current);
      }
      // 인증번호 요청
      try {
        const res = await fetchCertHandler(inputValues.phone);
        setPhoneUUID(res)
        await dispatch(authActions.fetchPhoneUUID({phoneUUID:res}));
      } catch (error) {
        console.log(error);
      }
    } else {
      if (!certIsValid) {
        Alert.alert('인증번호를 확인해주세요.');
        return;
      }

      console.log(cert, phoneUUID, '출력');
      const res = await confirmCertHandler(cert, phoneUUID);
      console.log(res.data.message);
      switch (res.data.message) {
        case '인증되었습니다.':
          console.log('완료');
          setPhoneIsAuthenticated(true);
          break;
        case '인증번호를 다시 확인해주세요.':
          Alert.alert(res.message);
          break;
        default:
          break;
      }
    }
  };

  const onCertHandler = enteredValue => {
    setCert(enteredValue);
  };

  const changeBtnHandler = () => {
    setLoading(false);
  };

  return (
    <>
      <View style={styles.phone}>
        {!loading && (
          <Input
            textInputConfig={{
              value: inputValues.confirmPassword,
              placeholder: '휴대폰번호, 숫자만 입력해주세요.',
              autoCapitalize: 'none',
              keyboardType: 'numeric',
              onChangeText: inputChangeHandler.bind(this, 'phone'),
              onBlur: onBlurHandler.bind(this, 'phone'),
            }}
            style={styles.btnCntr}
            // style={
            //   !confirmPasswordIsValid && !errors.confirmPassword
            //     ? styles.input
            //     : null
            // }
          />
        )}
        {loading && !phoneIsAuthenticated && (
          <Input
            textInputConfig={{
              placeholder: '인증번호를 입력해주세요',
              keyboardType: 'numeric',
              onChangeText: onCertHandler,
            }}
          />
        )}
        {loading && phoneIsAuthenticated && (
          <View style={styles.afterPhoneAuth}>
            <Text>확인완료 되었습니다.</Text>
          </View>
        )}
        {!loading && (
          <View style={styles.btnCntr}>
            <Btn
              style={styles.btn}
              title="인증"
              type="clear"
              onPress={phoneAuthHandler}></Btn>
          </View>
        )}
        {loading && time.current > 0 && (
          <View style={styles.btnCntr}>
            <Btn
              type="clear"
              style={styles.btn}
              title="확인"
              onPress={phoneAuthHandler}></Btn>
            <Text>
              {min}분 {sec}초
            </Text>
          </View>
        )}
        {loading && time.current <= 0 && (
          <View style={styles.btnCntr}>
            <Btn
              style={styles.btn}
              onPress={changeBtnHandler}
              type="clear"
              title="재요청"></Btn>
          </View>
        )}
      </View>
      {!errors.phone && !phoneIsValid && (
        <View>
          <Text style={styles.errorMessage}>숫자만 입력해주세요.</Text>
        </View>
      )}
    </>
  );
};

export default PhoneAuth;

const styles = StyleSheet.create({
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
  afterPhoneAuth: {
    minWidth: '60%',
    paddingLeft: 10,
    paddingTop: 15,
  },
});
