import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {Colors} from '../../constants/styles';
import RunButton3 from '../../components/ui/RunButton3';

const RunningProfile = ({navigation}) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.Title}>함께 산책가는 강아지가 있나요?</Text>
      <View style={styles.ProfileSelect}>
        <View style={styles.profileImg}>
          {/* <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../Assets/image/3d_dog.png')}
                  resizeMode="cover"
                /> */}
          <Text>이미지 들어갈 곳</Text>
        </View>
        <View style={styles.profileImg}>
          {/* <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../Assets/image/3d_dog.png')}
                  resizeMode="cover"
                /> */}
          <Text>이미지 들어갈 곳</Text>
        </View>
        <RunButton3
          onPress={() => {
            navigation.navigate('RunningGeolocation');
          }}
          style={{width: 50}}>
          선택완료
        </RunButton3>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.back100,
    justifyContent: 'center',
  },
  Title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ProfileSelect: {
    backgroundColor: Colors.back200,
    width: 350,
    height: 400,
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImg: {
    backgroundColor: 'orange',
    borderRadius: 130,
    height: 130,
    width: 130,
    marginLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default RunningProfile;
