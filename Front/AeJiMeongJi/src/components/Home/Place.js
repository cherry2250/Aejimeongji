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

const Place = () => {
  return (
    <View style={styles.box}>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          justifyContent: 'space-between',
        }}>
        <Text style={[styles.font, styles.font18, styles.line40]}>
          인기 방문 장소
        </Text>
        <Image
          style={styles.plus}
          resizeMode="contain"
          source={require('../../Assets/image/plus.png')}
        />
      </View>

      <View style={styles.placebox}>
        <Image
          style={{
            width: '100%',
            height: 200,
            borderRadius: 20,
          }}
          resizeMode="cover"
          source={require('../../Assets/image/강아지숲.png')}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[styles.font, styles.font18, styles.line40]}>
            강아지 숲
            <Text style={[styles.font, styles.font12, styles.line40]}>
              {'  '}테마파크
            </Text>
          </Text>
          <Text style={{lineHeight: 40, marginRight: 10}}>
            <Text style={{color: 'red'}}>★ </Text>4.3/5
          </Text>
        </View>
      </View>
      <View style={[styles.placebox, styles.placesubBox]}>
        <View style={[styles.placesubcontent, {marginRight: 5}]}>
          <Image
            style={{
              width: '100%',
              height: 150,
              borderRadius: 20,
            }}
            resizeMode="cover"
            source={require('../../Assets/image/마이무.png')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.font, styles.font14, styles.line40]}>
              마이무
              <Text style={[styles.font, styles.font10, styles.line40]}>
                {'  '}동물사료제조
              </Text>
            </Text>
          </View>
          <Text style={{lineHeight: 20, marginRight: 10}}>
            <Text style={{color: 'red'}}>★ </Text>4.21/5
          </Text>
        </View>
        <View style={[styles.placesubcontent, {marginLeft: 5}]}>
          <Image
            style={{
              width: '100%',
              height: 150,
              borderRadius: 20,
            }}
            resizeMode="cover"
            source={require('../../Assets/image/쿨쿨펫.png')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.font, styles.font14, styles.line40]}>
              쿨쿨펫
              <Text style={[styles.font, styles.font10, styles.line40]}>
                {'  '}반려동물호텔
              </Text>
            </Text>
          </View>
          <Text style={{lineHeight: 20, marginRight: 10}}>
            <Text style={{color: 'red'}}>★ </Text>4.8/5
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Place;

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
    marginTop: 20,
    marginBottom: 70,
  },
  plus: {
    marginTop: 5,
    maxWidth: '40%',
    maxHeight: '80%',
    marginRight: -20,
  },

  placebox: {
    height: 240,
    width: '100%',
    borderRadius: 20,
    marginBottom: 20,
  },
  placesubBox: {
    flexDirection: 'row',
    marginBottom: -10,
  },
  placesubcontent: {
    flex: 1,
  },
});
