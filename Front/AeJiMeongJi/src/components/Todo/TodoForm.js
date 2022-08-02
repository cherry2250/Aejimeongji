import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Button from '../ui/Button';
import Input from './Input';
import {Colors} from '../../constants/styles';
import SwitchToggle from 'react-native-switch-toggle';

const TodoForm = () => {
  const [isHome, setIsHome] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const [inputValues, setInputValues] = useState({
    todo: '',
    showHome: isHome,
    onAlert: isAlert,
  });
  const inputChangeHandler = (inputIdentifier, entredValue) => {
    setInputValues(curValue => {
      return {
        ...curValue,
        [inputIdentifier]: entredValue,
      };
    });
  };

  const submitHandler = () => {
    if (!inputValues.todo) {
      Alert.alert('내용을 입력해주세요');
      return;
    }
  };

  return (
    <View style={{flex: 1}}>
      <Input
        textInputConfig={{
          value: inputValues.email,
          placeholder: '할 일을 입력하세요',
          autoCapitalize: 'none',
          autoFocus: true,
          onChangeText: inputChangeHandler.bind(this, 'todo'),
        }}
      />

      <View style={styles.btnContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 2, marginTop: 13, marginLeft: 10}}>
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
          <View style={{flex: 2, marginTop: 13, marginLeft: 10}}>
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
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  font: {
    fontFamily: 'ONE Mobile POP',
  },
  contentFont: {
    fontFamily: 'ONE Mobile Regular',
    fontWeight: 'bold',
  },

  mainText: {
    fontSize: 20,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },
  subText: {
    fontSize: 18,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },

  contentText: {
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 2,
    color: Colors.contentText,
  },

  btnContainer: {
    flex: 1,
    width: '100%',
    marginTop: 24,
    alignSelf: 'center',
  },
  btnContainer2: {
    flex: 1,
    width: '70%',
    marginTop: 40,
    alignSelf: 'center',
  },
});
