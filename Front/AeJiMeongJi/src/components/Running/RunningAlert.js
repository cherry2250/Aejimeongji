import {useNavigation} from '@react-navigation/native';
import React, {Component, useEffect, useRef, useState} from 'react';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

import {
  StyleSheet,
  View,
  Text,
  Alert,
  AppRegistry,
  TouchableHighlight,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import RunButton from '../../components/ui/RunButton';
import StopWatch from 'react-native-stopwatch-timer/lib/stopwatch';
import {useDispatch} from 'react-redux';
import {runningActions} from '../../store/running';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RunningAlert = props => {
  console.log(`running alert에서 찍는`, props);
  const timeRef = useRef(0);
  const [start, setStart] = useState(true);
  const [reset, setReset] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const options = {
    container: {
      padding: responsiveWidth(2),
      borderRadius: 5,
      width: responsiveWidth(50),
      alignItems: 'center',
    },
    text: {
      fontSize: responsiveFontSize(3.4),
      fontFamily: '강원교육튼튼',
      color: '#000000',
      marginLeft: responsiveWidth(2),
    },
  };

  const timeKeeper = async time => {
    if (loading) {
      const myTime = time;
      await AsyncStorage.setItem('time', myTime);
      return myTime;
    }
  };

  const createThreeButtonAlert = async () => {
    setLoading(true);
    await timeKeeper();
    const savedTime = await AsyncStorage.getItem('time');
    setLoading(false);

    Alert.alert(
      '산책을 종료하시겠어요?',
      '산책이 모두 완료되었다면 종료해주세요',
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: '완료',
          onPress: async () => {
            // 포스트요청 거리랑, 시간을 보냄
            navigation.replace('RunningFinish', {
              distance: props.data,
              time: savedTime,
            });
          },
        },
      ],
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={{marginBottom: responsiveHeight(2.5)}}>
          <StopWatch
            laps
            secs
            start={start}
            getTime={timeKeeper}
            options={options}
          />
        </View>
      </View>
      <RunButton title={'3-Button Alert'} onPress={createThreeButtonAlert}>
        산책종료
      </RunButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
export default RunningAlert;
