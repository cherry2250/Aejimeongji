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

const Guide = () => {
  return (
    <View style={styles.box}>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          justifyContent: 'space-between',
        }}>
        <Text style={[styles.font, styles.font18, styles.line40]}>
          애견 가이드
        </Text>
      </View>

      <View style={styles.guideclickbox}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 20,
            marginTop: -10,
          }}
          resizeMode="contain"
          source={require('../../Assets/image/banner1.jpg')}
        />
      </View>
    </View>
  );
};

export default Guide;

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

  box: {
    alignSelf: 'center',
    width: '80%',
    marginTop: 0,
    marginBottom: 70,
  },
  plus: {
    marginTop: 5,
    maxWidth: '40%',
    maxHeight: '80%',
    marginRight: -20,
  },

  guideclickbox: {
    height: 150,
    alignSelf: 'center',
    backgroundColor: Colors.contentBox,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
