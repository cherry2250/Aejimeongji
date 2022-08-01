import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SignupForm from '../../components/Auth/SignupForm';
import ProgressBar from '../../components/ui/ProgressBar';
import {Colors} from '../../constants/styles';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.rootContainer}>
      <ProgressBar style={styles.progress} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>회원가입</Text>
      </View>
      <View style={styles.inputContainer}>
        <SignupForm navigation={navigation} />
      </View>
    </View>
  );
};
export default SignupScreen;

const styles = StyleSheet.create({
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
    color: Colors.btnBack100,
    fontWeight: 'bold',
    fontSize: 36,
  },
  inputContainer: {
    flex: 3,
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
  progress: {
    position: 'absolute',
    width: '50%',
    left: 0,
  },
});
