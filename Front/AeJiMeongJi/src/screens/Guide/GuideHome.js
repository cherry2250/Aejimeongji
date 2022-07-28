import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../constants/styles';
import {SafeAreaView} from 'react-native';
import CarouselCards from './CarouselCards';

const GuideHome = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View style={styles.GuideTitle}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            앵두님께 추천드리는 가이드
          </Text>
        </View>
        <CarouselCards />
      </SafeAreaView>
      <View style={styles.subGuide}>
        <Text>여기에 내용</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.back100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  GuideTitle: {
    marginBottom: 20,
  },
  subGuide: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default GuideHome;
