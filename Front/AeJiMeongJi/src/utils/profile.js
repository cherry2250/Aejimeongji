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
  formData.append('name', name);
  formData.append('weight', weight);
  formData.append('birthdate', birthdate);
  formData.append('adoptedDay', adoptedDay);
  formData.append('gender', gender);
  formData.append('neutering', neutering);
  formData.append('gone', gone);
  formData.append('breed', breed);

<<<<<<< HEAD
  formData.append('request', JSON.stringify(request), {
    type: 'application/json',
  });

  const data = {
    uri: image.uri,
    name: 'abcd.jpg',
    type: 'multipart/form-data', // or photo.type
  };
  console.log(data, '이것이 data');

  formData.append('image', data);
=======
  formData.append('image', {
    name: image.uri,
    type: 'multipart/form-data',
    uri: image.uri,
  });

>>>>>>> ab893fdbd145a87b8bc18feac38785c756b18a7c
  try {
    const res = await axios({
      method: 'POST',
      url: url + path,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformRequest: formData => {
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

<<<<<<< HEAD
export const fetchDogImage = async image => {
  // const newImage = image.replace('file://', '');
  console.log(image);
  const jwt = await AsyncStorage.getItem('token');
  const decodedJwt = jwt_decode(jwt);
  const memberId = decodedJwt.memberId;
  const path = `/api/member/4/dog/52/profileimage`;

  const formData = new FormData();
  console.log(image);
  formData.append('image', {
    name: image.uri,
    type: 'image/jpeg',
    uri: image.uri,
  });
  console.log(formData, '이거');
  try {
    const res = await axios({
      method: 'POST',
      url: url + path,
      data: formData,
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res, 'image에러');
    return res;
  } catch (error) {
    console.log(error.message, '에러');
  }
};
=======
// export const fetchDogImage = async image => {
//   // const newImage = image.replace('file://', '');
//   console.log(image);
//   // const dogId = id;
//   const jwt = await AsyncStorage.getItem('token');
//   const decodedJwt = jwt_decode(jwt);
//   const memberId = decodedJwt.memberId;
//   const path = `/api/member/${memberId}/dog/${dogId}/profileimage`;

//   const formData = new FormData();
//   console.log(image);
//   formData.append('image', {
//     name: image.uri,
//     type: 'image/jpeg',
//     uri: image.uri,
//   });
//   try {
//     const res = await axios({
//       method: 'POST',
//       url: url + path,
//       data: formData,
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log(res, 'image에러');
//     return res;
//   } catch (error) {
//     console.log(error.message, '에러');
//   }
// };
>>>>>>> ab893fdbd145a87b8bc18feac38785c756b18a7c

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

export const getImage = async () => {
  const path = '/api/image/0c7bb374-2f58-461f-813b-927b0f5abe8c.JPG';

  try {
    const res = await axios({
      method: 'get',
      url: url + path,
    });
    // console.log(res);
    // console.log(res.data, typeof(res.data), new Blob([res.data]));
    // const blob = new Blob([res.data])
    // console.log(blob, '여기');
    // const img = URL.createObjectUrl(blob)

    console.log(res.data);

    return res;
  } catch (error) {
    console.log(error, 'img 못부러옴');
  }
};

// 사용자의 강아지
export const fetchDogs = async () => {
  const memberId = await getMemberId();
  console.log(memberId);
  const path = `/api/member/${memberId}/dog`;
  try {
    const res = await axios({
      method: 'get',
      url: url + path,
    });

    const ids = [];

    if (res.data) {
      res.data.forEach(element => {
        ids.push(element.id);
      });
    }

    return ids;
  } catch (error) {
    console.log(error.response, '강아지 목록 불러오지 못함.');
  }
};

export const deleteProfileHandler = async dogId => {
  const memberId = getMemberId();
  const path = `/api/member/${memberId}/dog/${dogId}`;

  try {
    const res = axios({
      method: 'delete',
      url: url + path
    });
  } catch (error) {
    console.log(error.response);
  }
};
