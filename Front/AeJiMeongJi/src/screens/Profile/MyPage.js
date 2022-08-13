import React, {useLayoutEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';
import PlaceNavbar from '../../components/nav/PlaceNavbar';
import ConnectMyInfo from '../../components/Profile/ConnectMyInfo';
import LikeGuide from '../../components/Profile/LikeGuide';
import NoGuide from '../../components/Profile/NoGuide';
import {Colors} from '../../constants/styles';
import {fetchLikedGuide, getDog} from '../../utils/profile';

const DummyData = [
  {
    id: 1,
    source:
      'https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg',
  },
  {
    id: 2,
    source:
      'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg',
  },
  {
    id: 3,
    source:
      'https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840__340.jpg',
  },
  {
    id: 4,
    source:
      'https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092__340.jpg',
  },
  {
    id: 5,
    source:
      'https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310__340.jpg',
  },
  {
    id: 6,
    source:
      'https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815__340.jpg',
  },
  {
    id: 7,
    source:
      'https://cdn.pixabay.com/photo/2016/09/19/22/46/lake-1681485__340.jpg',
  },
];

const MyPage = () => {
  const [guide, setGuide] = useState();
  const [source, setSource] = useState();
  const dogId = useSelector(state => state.profile.id);
  const [dogName, setDogName] = useState();

  useLayoutEffect(() => {
    const fetchInitialData = async () => {
      const liked = await fetchLikedGuide();

      const res = await getDog(dogId);
      setDogName(res.name);
      setGuide(liked.data);
      setSource(`http://i7d203.p.ssafy.io:8080/api/image/${res.imageName}`);
    };
    fetchInitialData();
  }, []);

  return (
    <ScrollView style={styles.rootContainer}>
      <PlaceNavbar source={source}>MyPage</PlaceNavbar>
      <View style={styles.ConnectMyInfo}>
        <ConnectMyInfo dogName={dogName} />
      </View>
      <View style={styles.noGuideContainer}>{!guide && <NoGuide />}</View>
      <View>
        <Text style={styles.likedTitle}> 즐겨찾기 한 가이드 목록 </Text>
        <FlatList
          contentContainerStyle={styles.guideContainer}
          key={'#'}
          data={DummyData}
          renderItem={LikeGuide}
        />
      </View>
    </ScrollView>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.back100,
  },
  ConnectMyInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  likedTitle: {
    marginBottom: responsiveHeight(2),
    marginLeft: responsiveWidth(4),
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  noGuideContainer: {
    position: 'absolute',
    top: responsiveHeight(40),
    left: responsiveWidth(10),
  },
  guideContainer: {
    alignItems: 'center',
  },
});
