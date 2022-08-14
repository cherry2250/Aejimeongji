import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {Colors} from '../../constants/styles';
import TodoForm from '../../components/Todo/TodoForm';

const ToddUpload = props => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        {/* 선택하는 날짜로 띄우기 */}
        <Text style={styles.title}>
          {props.route.params.date.substr(0, 4)}년{' '}
          {props.route.params.date.substr(5, 2)}월{' '}
          {props.route.params.date.substr(8, 2)}일
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TodoForm date={props.route.params.date} />
      </View>
    </View>
  );
};
export default ToddUpload;

const styles = StyleSheet.create({
  font: {
    fontFamily: '강원교육튼튼',
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

  rootContainer: {
    flex: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.back100,
  },
  titleContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#553609',
    marginTop: 10,
    marginBottom: 20,
    fontFamily: '강원교육튼튼',
  },
  inputContainer: {
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%',
    backgroundColor: Colors.back200,
    paddingLeft: 30,
    paddingRight: 30,
  },
  input: {
    minWidth: '70%',
    paddingHorizontal: 10,
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.inputBorder,
  },
  btn: {
    flex: 1,
    marginTop: 16,
  },
});
