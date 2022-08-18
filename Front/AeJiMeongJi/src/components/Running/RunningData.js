import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants/styles';
import {getDog} from '../../utils/profile';
// import RunningDataItem from './RunningDataItem';
import {useSelector} from 'react-redux';
import data from './data';
import axios from '../../utils/index';
import {useNavigation} from '@react-navigation/native';

axios.defaults.withCredentials = true;
const url = 'http://i7d203.p.ssafy.io:8080';
const RunningData = props => {
  const dogId = useSelector(state => state.profile.id);
  const [RunningInfo, setRunningInfo] = useState([]);
  console.log(dogId);
  useLayoutEffect(() => {
    const fetchRunningInfo = async () => {
      const res = await axios(url + `/api/dog/${dogId}/walkingdog`);
      if (res) {
        setRunningInfo(res.data.data);
        console.log(res.data.data);
      }
    };
    fetchRunningInfo();
  }, []);
  console.log(RunningInfo);

  const Item = ({
    walkingCalories,
    walkingDistance,
    walkingDate,
    walkingTime,
  }) => {
    return (
      <View style={{padding: 10}} key={dogId}>
        {/* <Text
          style={{
            fontFamily: '강원교육튼튼',
            fontSize: responsiveFontSize(2),
            marginTop: responsiveHeight(1),
            marginBottom: responsiveHeight(1),
            marginLeft: responsiveWidth(2),
          }}>
          {walkingDate}
        </Text> */}
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.ContentItem}>
            <Text style={styles.itemFont}>{walkingCalories}</Text>
          </View>
          <View style={styles.ContentItem}>
            <Text style={styles.itemFont}>{walkingDistance}m</Text>
          </View>
          <View style={styles.ContentItem}>
            <Text style={styles.itemFont}>{walkingTime}분</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => (
    <Item
      walkingCalories={item.walkingCalories}
      walkingDistance={item.walkingDistance}
      walkingDate={item.walkingDate}
      walkingTime={item.walkingTime}
    />
  );

  return (
    <ScrollView>
      <View style={styles.InfoList}>
        <FlatList
          key={'#'}
          data={RunningInfo}
          renderItem={renderItem}
          numColumns={1}
          keyExtractor={item => item.id}></FlatList>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  InfoList: {
    backgroundColor: Colors.back200,
    height: responsiveHeight(75),
    width: responsiveWidth(85),
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ContentItem: {
    height: responsiveHeight(10),
    width: responsiveWidth(20),
    marginHorizontal: responsiveWidth(2),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DEB887',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  itemFont: {
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'IBMPlexSansKR-Bold',
  },
});

export default RunningData;
