import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {getMemberId} from './auth';

const url = 'http://i7d203.p.ssafy.io:8080';

export const fetchBreed = async () => {
  const path = '/api/breed';

  try {
    const res = await axios({
      method: 'GET',
      url: url + path,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchDog = async ({
  adoptedDay,
  birthdate,
  breed,
  gender,
  name,
  neutering,
  weight,
  gone,
  image,
}) => {
  // token 받아서, id 불러오기
  const jwt = await AsyncStorage.getItem('token');
  const decodedJwt = jwt_decode(jwt);
  const memberId = decodedJwt.memberId;
  const path = `/api/member/${memberId}/dog`;
  const request = {
    adoptedDay,
    birthdate,
    breed,
    gender,
    name,
    neutering,
    weight,
    gone,
  };

  const formData = new FormData();

  formData.append('request', new Blob([JSON.stringify(request)]), {
    type: 'application/json',
  });

  const data = {
    uri: image.uri,
    name: image.uri,
    type: image.type, // or photo.type
  };
  console.log(data, '이것이 data');

  formData.append('image', data);
  try {
    const res = await axios({
      method: 'post',
      url: url + path,
      headers: {
        "Content-Type": `multipart/form-data`,
      },
      transformRequest: (formData) => {
        console.log(formData, 'form');
        return formData;
      },
      data: formData,
    });
    console.log(res);
    return res.data.dogId;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchDogImage = async (id, image) => {
  const newImage = image.replace('file://', '');
  const dogId = id;
  const jwt = await AsyncStorage.getItem('token');
  const decodedJwt = jwt_decode(jwt);
  const memberId = decodedJwt.memberId;
  const path = `/api/member/${memberId}/dog/${dogId}/profileimage`;

  const formData = new FormData();
  console.log(image);
  formData.append('image', {
    name: image,
    type: 'image/jpeg',
    uri: Platform.OS === 'android' ? image : image.replace('file://', ''),
  });
  console.log(formData);
  try {
    const res = await axios({
      method: 'POST',
      url: url + path,
      formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res, 'image에러');
    return res;
  } catch (error) {
    console.log(error.message, '에러');
  }
};

export const getDogImage = async () => {
  // 이미지의 pk를 불러와야함.

  const path = '';
  try {
    const res = await axios({
      method: 'get',
      url: url + path,
    });
  } catch (error) {}
};

export const getProfile = async () => {
  const memberId = await getMemberId();
  console.log(memberId);
  const path = `/api/member/${memberId}/profile`;
  console.log('getprofile');
  try {
    const res = await axios({
      method: 'GET',
      url: url + path,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const changeProfile = async ({nickname}) => {
  const jwt = await AsyncStorage.getItem('token');
  const decodedJwt = jwt_decode(jwt);
  const memberId = decodedJwt.memberId;
  const path = `/api/member/${memberId}`;

  try {
    const res = await axios({
      method: 'PUT',
      url: url + path,
      data: {
        nickname,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
