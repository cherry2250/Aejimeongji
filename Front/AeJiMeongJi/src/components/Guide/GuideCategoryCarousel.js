import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';

const CarouselItem = ({category, lat, lng, source}) => {
  const navigation = useNavigation();
  const data = [
    {
      image: require('../../Assets/image/GuideCategory_1.png'),
      text: '음식',
    },
    {
      image: require('../../Assets/image/GuideCategory_2.png'),
      text: '건강',
    },
    {
      image: require('../../Assets/image/GuideCategory_3.png'),
      text: '행동',
    },
    {
      image: require('../../Assets/image/GuideCategory_4.png'),
      text: '제품',
    },
    {
      image: require('../../Assets/image/GuideCategory_5.png'),
      text: '훈련',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: responsiveWidth(46),
          height: responsiveHeight(18),
          marginLeft: responsiveWidth(5),
          marginRight: responsiveWidth(5),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('GuideCategory', item.text);
          }}>
          <Image
            source={item.image}
            style={{width: responsiveWidth(46), height: responsiveHeight(18)}}
            resizeMode="cover"></Image>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: responsiveHeight(2),
        marginBottom: responsiveHeight(2),
      }}>
      <View style={{alignItems: 'center', marginBottom: responsiveHeight(2)}}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.8),
            fontFamily: '강원교육튼튼',
          }}>
          카테고리 별 가이드 보기!
        </Text>
      </View>
        <Carousel
          layout={'default'}
          data={data}
          sliderWidth={responsiveWidth(100)}
          sliderHeight={responsiveHeight(20)}
          itemWidth={responsiveWidth(44)}
          renderItem={renderItem}
          firstItem={2}
        />
    </SafeAreaView>
  );
};

export default CarouselItem;
