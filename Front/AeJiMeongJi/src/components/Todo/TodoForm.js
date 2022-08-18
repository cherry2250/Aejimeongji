import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Button from '../ui/Button';
import Input from './Input';
import {Colors} from '../../constants/styles';
import SwitchToggle from 'react-native-switch-toggle';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const url = 'http://i7d203.p.ssafy.io:8080';
const TodoForm = props => {
  console.log('todo form 진입');


  const navigation = useNavigation();
  const dogId = useSelector(state => state.profile.id);
  const [isHome, setIsHome] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [content, setContent] = useState('');

  const inputChangeHandler = entredValue => {
    setContent(entredValue);
  };

  const backHandler = () => {
    navigation.navigate('CalendarHome');
  };

  const submitHandler = () => {
    let data = {
      content: content,
      date: props.date,
      isActive: isHome,
      isAlert: isAlert,
    };

    axios
      .post(url + `/api/dog/${dogId}/calendar`, data, {
        headers: {'Content-Type': 'application/json'},
      })
      .then(response => {
        if (response.status == 200) {
          console.log('To-Do 등록 성공');
          console.log(response);
          navigation.navigate('CalendarHome');
        } else {
          console.log('To-Do 등록에 실패했습니다.');
        }
      });
  };

  return (
    <View style={{flex: 1}}>
      <Input
        textInputConfig={{
          placeholder: '할 일을 입력하세요',
          fontFamily: 'IBMPlexSansKR-Regular',
          autoCapitalize: 'none',
          autoFocus: true,
          onChangeText: inputChangeHandler.bind(this),
        }}
        onChange={e => {
          console.log(e.target.value);
          setContent(e.target.value);
        }}
      />

      <View style={styles.btnContainer}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 2,
              marginTop: responsiveHeight(2),
              marginLeft: responsiveWidth(3),
            }}>
            <Text style={[styles.font, styles.mainText]}>홈 화면에서 보기</Text>
          </View>
          <View style={{flex: 1}}>
            <SwitchToggle
              switchOn={isHome}
              onPress={() => setIsHome(!isHome)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 2,
              marginTop: responsiveHeight(2),
              marginLeft: responsiveWidth(3),
            }}>
            <Text style={[styles.font, styles.mainText]}>푸시알람 받기</Text>
          </View>
          <View style={{flex: 1}}>
            <SwitchToggle
              switchOn={isAlert}
              onPress={() => setIsAlert(!isAlert)}
            />
          </View>
        </View>
      </View>

      <View style={styles.btnContainer2}>
        <Button onPress={submitHandler}>등록하기</Button>
      </View>
      <View style={styles.btnContainer3}>
        <Button onPress={backHandler}>뒤로가기</Button>
      </View>
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  font: {
    fontFamily: '강원교육튼튼',
  },
  font10: {fontSize: responsiveFontSize(1)},
  font12: {fontSize: responsiveFontSize(1.3)},
  font14: {fontSize: responsiveFontSize(1.6)},
  font18: {fontSize: responsiveFontSize(1.99)},
  font20: {fontSize: responsiveFontSize(1.9999)},
  line20: {lineHeight: 20},
  line40: {lineHeight: 40},
  mainText: {
    fontSize: responsiveFontSize(1.9999),
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },

  btnContainer: {
    flex: 1,
    width: responsiveWidth(80),
    marginTop: responsiveHeight(5),
    alignSelf: 'center',
  },
  btnContainer2: {
    flex: 1,
    width: responsiveWidth(60),
    marginTop: responsiveHeight(5),
    alignSelf: 'center',
  },
  btnContainer3: {
    flex: 1,
    width: responsiveWidth(60),
    marginTop: responsiveHeight(-4),
    alignSelf: 'center',
  },
});
