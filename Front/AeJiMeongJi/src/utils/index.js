import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// 요청 인터셉터 추가하기

axios.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가하기
axios.interceptors.response.use(
  response => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  async error => {
    const {
      config,
      response: {status},
    } = error;

    if (status === 401) {
      if (error.response.data.message === 'TokenExpiredError') {
        const originalRequest = config;
        const refreshToken = await AsyncStorage.getItem('refresh');
        // token refresh 요청

        const {data} = await refresh(refreshToken);
        const {accessToken: newAccessToken, refreshToken: newRefreshToken} =
          data;
        await AsyncStorage.multiSet([
          ['accessToken', newAccessToken],
          ['refreshToken', newRefreshToken],
        ]);
        axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      }
    }
    // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청

    return Promise.reject(error);
  },
);
