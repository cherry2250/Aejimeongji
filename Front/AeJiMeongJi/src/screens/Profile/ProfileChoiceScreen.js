import React, {useCallback, useLayoutEffect, useState} from 'react';
import {FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DummyData from '../../components/Profile/DummyData';
import ProfileItems from '../../components/Profile/ProfileItems';
import {Colors} from '../../constants/styles';
import {Provider, useDispatch, useSelector} from 'react-redux';
import Button from '../../components/ui/Button';
import {fetchDogs, getImage} from '../../utils/profile';
import { useNavigation } from '@react-navigation/native';

// 아이템을 parameter로 받아서 profileItems의 parameter로 넘겨줘야함.
const ProfileChoiceScreen = () => {
  // item을 flat list로 rendering
  // 강아지의 모든 정보를 조회 => 이미지를 렌더링
  // 첫 화면에는 무조건

  // 배열에 id를 저장하고, 그 저장한 것 바탕으로 이미지 다시 불러서 DummyData에 push

  const ids = useSelector(state => state.ids);
  const [isEditing, setIsEditing] = useState(false);
  const navigation = useNavigation()

  const addProfileData = {
    source: require('../../Assets/image/Profile.png'),
    purpose: 'yes',
  };

  const [profiles, setProfiles] = useState([]);
  const [dogProfiles, setDogProfiles] = useState([]);
  const [img, setImg] = useState();
  const url = 'http://i7d203.p.ssafy.io:8080/api/image/';

  const images = [];
  useLayoutEffect(() => {
    const fetchAlldogs = async () => {
      const res = await fetchDogs();
      if (res.length < 4) {
        res.push(addProfileData)
      }
      setProfiles(res)

      // const image = await getImage(profile.imageName)
      // images.push(image)
      // setImg(image)
    };
    fetchAlldogs();
  }, []);
  console.log(profiles, '프로필');

  const renderItem = ({item}) => (
    <ProfileItems
      id={item.dogId}
      source={
        item.imageName ?     
        {uri: `${url}${item.imageName}`} : item.source}
      purpose={item.purpose}
      isEditing={isEditing}
      name={item.name}
    />
  );

  const changeEditHandler = () => {
    setIsEditing(cur => !cur)
  }

  const goToMyInfo = () => {
    navigation.navigate('MyInfo')
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.header}>
        <Button style={styles.button} onPress={changeEditHandler}>편집(수정예정)</Button>
      </View>
      <FlatList
        key={'#'}
        data={profiles}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.flatlist}
        columnWrapperStyle={{justifyContent: 'center', alignItems: 'center'}}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={goToMyInfo}>내 계정 관리</Button>
      </View>
    </SafeAreaView>
  );
};

export default ProfileChoiceScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.back100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    // flex: 3 ,
    // justifyContent: 'center',
  },
  profile: {
    // flex: 1,
  },
  image: {
    width: 132,
    height: 132,
    borderRadius: 100,
    borderColor: Colors.contentText,
    borderWidth: 2,
    margin: 10,
  },
  flatlist: {
    flexGrow: 0,
  },
  header :{
    position: 'absolute',
    top: 50
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
  },
  button: {
    backgroundColor: '#EDCCA2',
    color: '#90560D',
    fontSize: 13,
    fontWeight: 'bold',
    minWidth: '40%',
  },
});
