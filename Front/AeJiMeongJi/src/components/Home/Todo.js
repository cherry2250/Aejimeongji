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
const Todo = () => {
  const [isPress, setIsPress] = React.useState(false);

  return (
    <View style={styles.box}>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          justifyContent: 'space-between',
        }}>
        <Text style={[styles.font, styles.font18, styles.line40]}>To-do </Text>
        <Image
          style={styles.plus}
          resizeMode="contain"
          source={require('../../Assets/image/plus.png')}
        />
      </View>
      <View style={styles.todobox}>
        <View style={{flexDirection: 'row'}}>
          {isPress ? (
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => {
                setIsPress(!isPress);
              }}
            />
          ) : (
            <TouchableOpacity
              style={styles.checknonbox}
              onPress={() => {
                setIsPress(!isPress);
              }}
            />
          )}
          <Text style={[styles.font, styles.titleText]}>지은이 발표시키기</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.checkbox} />
          <Text style={[styles.font, styles.titleText]}>
            도현이 RN 공부시키기
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.checkbox} />
          <Text style={[styles.font, styles.titleText]}>
            경열이 스마트워치 연동시키기
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Todo;

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

  titleText: {
    fontSize: 14,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },
  titleText2: {
    fontSize: 12,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },
  titleText3: {
    fontSize: 10,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },
  titleText4: {
    fontSize: 14,
    lineHeight: 40,
    letterSpacing: 2,
    color: Colors.contentText,
  },
  contentText: {
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 2,
    color: Colors.contentText,
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
  logo: {
    marginTop: 50,
    maxWidth: '60%',
    maxHeight: '30%',
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
  box: {
    alignSelf: 'center',
    width: '80%',
    marginTop: 20,
    marginBottom: 70,
  },
  todobox: {
    height: 150,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: Colors.contentBox,
    borderRadius: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  checkbox: {
    borderWidth: 2,
    borderColor: Colors.back200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  checknonbox: {
    borderWidth: 2,
    borderColor: Colors.back200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    width: 20,
    height: 20,
    backgroundColor: Colors.back100,
    borderRadius: 100,
  },
  plus: {
    marginTop: 5,
    maxWidth: '40%',
    maxHeight: '80%',
    marginRight: -20,
  },
});
