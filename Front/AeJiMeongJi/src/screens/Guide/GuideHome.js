import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Image, StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants/styles';
import {SafeAreaView, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {getMemberId} from '../../utils/auth';
import CarouselCards from '../../components/Guide/CarouselCards';
import GuideNavbar from '../../components/nav/GuideNavbar';
import SubCard from '../../components/Guide/SubCard';
import GuideCategoryCarousel from '../../components/Guide/GuideCategoryCarousel';
import Button from '../../components/ui/Button';
import GuideButton from '../../components/ui/GuideButton';
import {fetchGuideList} from '../../utils/guide';
import axios from '../../utils/index';
import {getDog} from '../../utils/profile';

const url = 'http://i7d203.p.ssafy.io:8080';

const GuideHome = ({navigation}) => {
  const [dogInfo, setDogInfo] = useState();
  const [source, setSource] = useState();
  const [guideList, setguideList] = useState([]);

  const [loading, setLoading] = useState(false);

  const dogId = useSelector(state => state.profile.id);

  useLayoutEffect(() => {
    setLoading(true);
    const fetchInitialData = async () => {
      const res = await getDog(dogId);
      const response = await axios(url + '/api/guide?dog=' + dogId);
      if (res) {
        setDogInfo(res.name);
        setSource(`http://i7d203.p.ssafy.io:8080/api/image/${res.imageName}`);
      }
      if (response) {
        setguideList(response.data);
      }
      setLoading(false);
    };
    fetchInitialData();
  }, []);

  return (
    <SafeAreaView>
      <GuideNavbar source={source} />
      <ScrollView style={styles.rootContainer}>
        <View style={styles.categoryContainer}>
          <GuideCategoryCarousel></GuideCategoryCarousel>
          {loading && (
            <ActivityIndicator
              style={styles.spinner}
              size="large"
              color="#aaa"
            />
          )}
        </View>
        <View style={styles.recommendContainer}>
          <View style={styles.recommendTitle}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.7),
                fontFamily: '강원교육튼튼',
              }}>
              맞춤형 추천 가이드
            </Text>
          </View>
          <CarouselCards age={guideList?.ageGuideList} />
        </View>
        <View style={styles.trandingContainer}>
          <Text style={styles.trandingTitle}>
            지금 핫한 반려생활 가이드 Top5!
          </Text>
          <SubCard
            style={styles.subCards}
            category={guideList?.fixedGuideList}></SubCard>
        </View>
        <View style={styles.essentialContainer}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontFamily: '강원교육튼튼',
              marginVertical: responsiveHeight(2)
            }}>
            현재 연령대에 꼭 알아야 하는 정보
          </Text>
          <CarouselCards
            style={styles.carouselCards}
            age={guideList?.weightGuideList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.back100,
  },
  spinner: {
    position: 'absolute',
    left: responsiveWidth(45),
    top: responsiveHeight(25),
  },
  recommendContainer: {
    height: responsiveHeight(40),
    marginVertical: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommendTitle: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
  },
  trandingContainer: {
    height: responsiveHeight(130),
    marginVertical: responsiveHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  trandingTitle: {
    fontSize: responsiveFontSize(2.7),
    fontFamily: '강원교육튼튼',
    marginBottom: responsiveHeight(3),
  },
  essentialContainer: {
    height: responsiveHeight(50),
    marginVertical: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  subCards: {
    marginBottom: responsiveHeight(2),
  },
});

export default GuideHome;
