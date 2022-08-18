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
  const [id, setId] = useState();
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
      <ScrollView>
        <View style={styles.container}>
          <GuideCategoryCarousel style={{}}></GuideCategoryCarousel>

          <View style={styles.guideTitle}>
            {loading && <ActivityIndicator size="large" color="#aaa" />}
            <Text
              style={{
                fontSize: responsiveFontSize(2.7),
                fontFamily: '강원교육튼튼',
              }}>
              {dogInfo}를 위한 맞춤형 추천 가이드
            </Text>
          </View>
          <View style={{flex: 2.2}}>
            <CarouselCards
              style={styles.carouselCards}
              age={guideList?.ageGuideList}
            />
          </View>

          <View style={styles.subGuide}>
            <Text style={styles.subGuideTitle}>
              지금 핫한 반려생활 가이드 Top5!
            </Text>
            <SubCard
              style={styles.subCards}
              category={guideList?.fixedGuideList}></SubCard>
          </View>
          <View style={styles.subguideTitle2}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                fontFamily: '강원교육튼튼',
              }}>
              현재 연령대에 꼭 알아야 하는 정보
            </Text>
          </View>
          <View style={{flex: 2.2}}>
            <CarouselCards
              style={styles.carouselCards}
              age={guideList?.weightGuideList}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.back100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    height: 2300,
  },
  guideTitle: {
    flex: 0.4,
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(2),
    height: 200,
  },
  subguideTitle2: {
    flex: 0.38,
    marginBottom: responsiveHeight(2),
  },
  subGuideTitle: {
    fontSize: responsiveFontSize(2.7),
    fontFamily: '강원교육튼튼',
    marginBottom: responsiveHeight(3),
  },
  carouselCards: {},
  subGuide: {
    flex: 7,
    height: responsiveHeight(3),
    width: responsiveWidth(90),
    marginTop: responsiveHeight(2),
  },
  subGuide2: {
    flex: 7,
    height: 10,
    width: responsiveWidth(90),
    marginTop: responsiveHeight(2),
  },
  ButtonBox: {},
  subCards: {
    marginBottom: responsiveHeight(2),
  },
});

export default GuideHome;
