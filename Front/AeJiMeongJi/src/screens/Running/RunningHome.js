import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../constants/styles';
import RunButton from '../../components/ui/RunButton';
import RunButton2 from '../../components/ui/RunButton2';

const RunningHome = props => {
  return (
    <View style={styels.rootContainer}>
      <View>
        <View style={styels.runimgBox}>
          <Image
            style={styels.runImg}
            source={require('../../Assets/image/3d_dog.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styels.contentBox}>
          <View style={styels.profileBox}>
            <View style={{flexDirection: 'row'}}>
              <View style={styels.profileImg}>
                {/* <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../Assets/image/3d_dog.png')}
                  resizeMode="cover"
                /> */}
                <Text>이미지 들어갈 곳</Text>
              </View>
              <View>
                <View style={styels.infoBox}>
                  <View style={styels.infoName}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>앵두</Text>
                  </View>
                  <View style={styels.infoCate}>
                    <Text style={{fontSize: 17}}>10살, 5kg, 푸들</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styels.RunTime}>
              <Text style={{fontSize: 15}}>
                권장 산책시간은 1일 30분입니다.
              </Text>
            </View>
          </View>
          <View style={styels.runButton}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <RunButton styel={styels.runLoginButton}>산책 시작하기</RunButton>
              <RunButton2 style={{}}>산책 이력보기</RunButton2>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RunningHome;

const styels = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.back100,
  },
  infoName: {},
  infoCate: {
    marginTop: 10,
  },
  RunTime: {
    marginTop: 22,
    marginBottom: 18,
    alignItems: 'center',
  },
  runImg: {
    flex: 1,
    marginTop: 0,
    maxWidth: '100%',
    borderRadius: 20,
  },
  profileImg: {
    backgroundColor: 'orange',
    borderRadius: 130,
    height: 130,
    width: 130,
    marginLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  runButton: {
    marginLeft: 27,
    marginRight: 27,
  },
  contentBox: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: Colors.back200,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  runimgBox: {
    flex: 1,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  profileBox: {
    marginBottom: 20,
  },
  infoBox: {
    marginLeft: 23,
    marginTop: 30,
    marginBotton: 20,
  },
});
