import React from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

const renderItem = ({item, index}, parallaxProps) => {
  return (
    <View style={styles.item}>
      <ParallaxImage
        source={{uri: item}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
    </View>
  );
};

const ReviewCarousel = ({infoImage}) => {
  return (
    <View>
      <Carousel
        sliderWidth={responsiveWidth(100)}
        sliderHeight={responsiveHeight(100)}
        itemWidth={responsiveWidth(100)}
        data={infoImage}
        renderItem={renderItem}
        hasParallaxImages={true}
        showSpinner={true}
        firstItem={0}
      />
    </View>
  );
};

export default ReviewCarousel;

const styles = StyleSheet.create({
  item: {
    width: responsiveWidth(100),
    height: responsiveWidth(80),
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
  },
  image: {
    // ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});
