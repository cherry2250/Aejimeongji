import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants/styles';

const LikeGuide = ({item}) => {
  const goToGuide = () => {
    // navigation.navigate('GuideDetail', {guideId: item.guideId});
  };
  return (
    <>
      <Pressable onPress={goToGuide} style={styles.guideContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.source}} style={styles.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title ? item.title : '타이틀'}</Text>
        </View>
        <View styles={styles.guide}></View>
      </Pressable>
    </>
  );
};

export default LikeGuide;

const styles = StyleSheet.create({
  guide: {},
  guideContainer: {
    backgroundColor: Colors.back200,
    borderRadius: 20,
    paddingBottom: 15,
    paddingTop: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    width: responsiveWidth(80),
    height: responsiveHeight(12),
    flexDirection: 'row',
  },
  imageContainer: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    alignItems: 'center',
    marginHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderRadius: responsiveWidth(15),
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: responsiveFontSize(2),
  },
});
