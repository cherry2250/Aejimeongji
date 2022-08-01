import axios from 'axios';
import {useDispatch} from 'react-redux';
import {authActions} from '../store/auth';
import {useNavigation} from '@react-navigation/native';

const url = '';

export const login = async (email, password) => {
  const path = '/api/auth/login';
  const dispatch = useDispatch();

  try {
    const res = await axios({
      method: 'POST',
      url: url + path,
      data: {
        email,
        password,
      },
    });
    dispatch(authActions.authenticate({token: res.data.token}));
  } catch (error) {}
};

export const register = async ({email, password, name, nickname, phone}) => {
  console.log(email, password, name, nickname, phone);
  const path = '/api/signup';
  const dispatch = useDispatch();
  const navigation = useNavigation();
  try {
    const res = await axios({
      method: 'POST',
      url: url + path,
      data: {
        email,
        password,
        username: name,
        nickname,
        phoneNumber: phone,
      },
    });
    dispatch(authActions.authenticate({token: res.data.token}));
    AsyncStorage.setItem(token, res.data.accessToken);
    navigation.navigate('home');
  } catch (error) {
    throw new Error(error);
  }
};

// 인증번호 요청
export const fetchCertHandler = async phone => {
  const path = '/api/phoneauth';
  try {
    const res = await axios({
      method: 'POST',
      url: url + path,
      data: {
        phoneNumber: phone,
      }
    });
    dispatch(authActions.authenticate({phoneUUID: res.data.PhoneUUID}))
  } catch (error) {}
};

export const confirmCertHandler = async (authNumber, phoneUUID) => {
  const path = '/api/phoneauth/verify'
  try {
    const res = await axios({
      method: 'POST',
      url: url + path,
      data: {
        phoneUUID,
        authNumber
      }
    })
    return res
  } catch (error) {}
}
