import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
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

  rootContainer: {
    flex: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.back100,
  },
  titleContainer: {
    flex: 1,
    marginTop: responsiveHeight(10),
    justifyContent: 'center',
  },
  title: {
    fontSize: responsiveFontSize(4),
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
    width: responsiveWidth(100),
    backgroundColor: Colors.back200,
    paddingLeft: responsiveWidth(10),
    paddingRight: responsiveWidth(10),
  },
});
