import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../constants/styles';
import {SafeAreaView, ScrollView} from 'react-native';
import CarouselCards from './CarouselCards';
import SubCard from './SubCard';
import GuideButton from '../../components/ui/GuideButton';

const GuideHome = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <GuideButton style={{marginLeft: 10}}> 건강 </GuideButton>
          <GuideButton style={{marginLeft: 10}}> 음식 </GuideButton>
          <GuideButton style={{marginLeft: 10}}> 여행 </GuideButton>
          <GuideButton style={{marginLeft: 10}}> 훈련 </GuideButton>
          <GuideButton style={{marginLeft: 10}}> 정보 </GuideButton>
        </View>
        <View style={styles.GuideTitle}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            앵두님께 추천드리는 가이드
          </Text>
        </View>
        <View style={{flex: 1.3}}>
          <CarouselCards style={styles.CarouselCards} />
        </View>

        <View style={styles.subGuide}>
          <Text>반려생활 가이드</Text>
          <SubCard></SubCard>
          <SubCard></SubCard>
          <SubCard></SubCard>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.back100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    height: 3000,
  },
  GuideTitle: {
    flex: 0.1,
    marginBottom: 20,
    height: 200,
  },
  CarouselCards: {},
  subGuide: {
    flex: 10,
    backgroundColor: 'yellow',
    height: 10,
  },
  ButtonBox: {},
});

export default GuideHome;
