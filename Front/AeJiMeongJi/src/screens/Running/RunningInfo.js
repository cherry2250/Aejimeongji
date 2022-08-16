import React, {useState, useLayoutEffect} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants/styles';
import RunButton3 from '../../components/ui/RunButton3';
import RunningData from '../../components/Running/RunningData';
import {useNavigation} from '@react-navigation/native';
import {getDog} from '../../utils/profile';
// import RunningDataItem from './RunningDataItem';
import {useSelector} from 'react-redux';

const RunningInfo = props => {
  const navigation = useNavigation();
  const dogId = useSelector(state => state.profile.id);
  const [dogName, setDogName] = useState();

  useLayoutEffect(() => {
    const fetchInitialData = async () => {
      const res = await getDog(dogId);
      if (res) {
        setDogName(res.name);
      }
    };
    fetchInitialData();
  });

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.Title}>{dogName}의 산책이력</Text>
      <RunningData style={styles.InfoList}></RunningData>
      <RunButton3
        style={{}}
        onPress={() => {
          navigation.navigate('RunningHome');
        }}>
        확인완료
      </RunButton3>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingVertical: responsiveHeight(3),
    alignItems: 'center',
    backgroundColor: Colors.back100,
    justifyContent: 'center',
  },
  Title: {
    textAlign: 'center',
    fontSize: responsiveFontSize(3.2),
    fontFamily: '강원교육튼튼',
    marginBottom: 20,
  },
});

export default RunningInfo;
