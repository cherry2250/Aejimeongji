import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import CarouselItem from '../../components/Place/CarouselItem';
import DogInfo from '../../components/Place/DogInfo';
import {Colors} from '../../constants/styles';
import PlaceNavbar from '../../components/nav/PlaceNavbar';
import {useSelector} from 'react-redux';
import {getDog} from '../../utils/profile';
import Geolocation from 'react-native-geolocation-service';

async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    }
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (e) {
    console.log(e);
  }
}


const PlaceHome = () => {
  const DummyData = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
  ];

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };
  const dogId = useSelector(state => state.profile.id);
  const [source, setSource] = useState();
  const [dogInfo, setDogInfo] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    const InitialData = async () => {
      console.log(dogId);
      const res = await getDog(dogId);
      setSource(`http://i7d203.p.ssafy.io:8080/api/image/${res.imageName}`);
      setDogInfo(res);
    };

    const requestPermission = async () => {
      // ios
      if (Platform.OS === 'ios') {
        return await Geolocation.requestAuthorization('always');
      }
      // 안드로이드 위치 정보 수집 권한 요청
      if (Platform.OS === 'android') {
        const res = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (res === 'granted') {
          Geolocation.getCurrentPosition(pos => {
            console.log(pos.coords);
            setLocation(pos.coords)});
        }
      }
    };
    requestPermission();
    InitialData();
  }, []);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <PlaceNavbar source={source} />
      <ScrollView>
        <View>
          <DogInfo source={source} dogInfo={dogInfo} />
        </View>
        {/* <CarouselItem
        category={data.category 형식으로}
        */}

        <View>
          <CarouselItem />
        </View>
        <View>
          <CarouselItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlaceHome;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // alignItems: 'center',
    // backgroundColor: Colors.back100,
    backgroundColor: '#FBEDD3',
  },
  item: {
    width: 120,
    height: 120,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
