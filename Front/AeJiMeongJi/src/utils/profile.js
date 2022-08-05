import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

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
}) => {
  // token 받아서, id 불러오기
  const jwt = await AsyncStorage.getItem('token');
  const decodedJwt = jwt_decode(jwt);
  const memberId = decodedJwt.memberId;
  const path = `/api/member/${memberId}/dog`;
  console.log(memberId);

  try {
    const res = await axios({
      method: 'POST',
      url: url + path,
      data: {
        adoptedDay,
        birthdate,
        breed,
        gender,
        name,
        neutering,
        weight,
        gone,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
