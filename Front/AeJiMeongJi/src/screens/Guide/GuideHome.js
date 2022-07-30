import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../constants/styles';
import {SafeAreaView, ScrollView} from 'react-native';
import CarouselCards from './CarouselCards';
import SubCard from './SubCard';
import Button from '../../components/ui/Button';
import GuideButton from '../../components/ui/GuideButton';

const GuideHome = ({navigation}) => {
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
        <View style={styles.guideTitle}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            앵두님께 추천드리는 가이드
          </Text>
        </View>
        <View style={{flex: 4}}>
          <CarouselCards style={styles.carouselCards} />
        </View>

        <View style={styles.subGuide}>
          <Text style={styles.subGuideTitle}>
            지금 핫한 반려생활 가이드 Top5!
          </Text>
          <SubCard
            style={styles.subCards}
            onPress={() => {
              navigation.navigate('GuideDetail');
            }}></SubCard>
          <SubCard style={styles.subCards}></SubCard>
          <SubCard style={styles.subCards}></SubCard>
          <SubCard style={styles.subCards}></SubCard>
          <SubCard style={styles.subCards}></SubCard>
        </View>
        <View style={styles.subguideTitle2}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            현재 연령대에 꼭 알아야 하는 정보
          </Text>
        </View>
        <View style={{flex: 4}}>
          <CarouselCards style={styles.carouselCards} />
        </View>
        <Button
          onPress={() => {
            navigation.navigate('GuideDetail');
          }}>
          가이드 디테일
        </Button>
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
    height: 1900,
  },
  guideTitle: {
    flex: 0.4,
    marginBottom: 20,
    height: 200,
  },
  subguideTitle2: {
    flex: 0.38,
    marginBottom: 20,
  },
  subGuideTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carouselCards: {},
  subGuide: {
    flex: 10.2,
    height: 10,
    width: 350,
    marginTop: 40,
  },
  subGuide2: {
    flex: 7,
    height: 10,
    width: 350,
    marginTop: 40,
  },
  ButtonBox: {},
  subCards: {
    marginBottom: 20,
  },
});

export default GuideHome;
