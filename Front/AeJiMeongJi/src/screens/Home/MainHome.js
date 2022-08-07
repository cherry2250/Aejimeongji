import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../constants/styles';
import Profile from '../../components/Home/Profile';
import Running from '../../components/Home/Running';
import Navbar from './../../components/nav/Navbar';
import Place from '../../components/Home/Place';
import Guide from '../../components/Home/Guide';
import Todo from '../../components/Home/Todo';

const MainHome = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Navbar />
        <View style={styles.contentbox}>
          <Profile />

          <View style={styles.guidebox}>
            <View style={styles.guidecontent}>
              <Image
                style={styles.notice}
                resizeMode="contain"
                source={require('../../Assets/image/notice-logo.png')}
              />
              <Text style={[styles.font, styles.font14, styles.line40]}>
                예방접종한 지 일년이 지났어요!
              </Text>
            </View>
          </View>

          <Running />

          <Todo />

          <Place />

          <Guide />
        </View>
      </View>
    </ScrollView>
  );
};
export default MainHome;

const styles = StyleSheet.create({
  //글꼴
  font: {
    fontFamily: 'ONE Mobile POP',
    letterSpacing: 4,
    color: Colors.contentText,
  },
  contentFont: {
    fontFamily: 'ONE Mobile Regular',
    fontWeight: 'bold',
  },
  //글자 크기
  font10: {fontSize: 10},
  font12: {fontSize: 12},
  font14: {fontSize: 14},
  font18: {fontSize: 18},
  font20: {fontSize: 20},
  line20: {lineHeight: 20},
  line40: {lineHeight: 40},
  self: {
    alignSelf: 'center',
  },

  rootContainer: {
    flex: 1,
    backgroundColor: Colors.back100,
  },

  contentbox: {
    flex: 14,
    justifyContent: 'center',
    backgroundColor: Colors.back100,
  },

  notice: {
    maxWidth: '20%',
    maxHeight: '100%',
  },

  guidebox: {
    height: 70,
    alignSelf: 'center',
    width: '80%',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 20,
    marginTop: -10,
    borderBottomColor: Colors.btnBack100,
    borderBottomWidth: 1,
  },
  guidecontent: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
