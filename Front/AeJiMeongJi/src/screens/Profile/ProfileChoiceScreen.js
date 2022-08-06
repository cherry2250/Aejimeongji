import React, {useCallback, useLayoutEffect, useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import DummyData from '../../components/Profile/DummyData';
import ProfileItems from '../../components/Profile/ProfileItems';
import {Colors} from '../../constants/styles';
import {Provider, useDispatch, useSelector} from 'react-redux';
import Button from '../../components/ui/Button';
import { fetchDogs } from '../../utils/profile';

// 아이템을 parameter로 받아서 profileItems의 parameter로 넘겨줘야함.
const ProfileChoiceScreen = () => {
  // item을 flat list로 rendering
  // 강아지의 모든 정보를 조회 => 이미지를 렌더링
  // 첫 화면에는 무조건

  // 배열에 id를 저장하고, 그 저장한 것 바탕으로 이미지 다시 불러서 DummyData에 push

  const ids = useSelector(state => state.ids);
  const [isEditing, setIsEditing] = useState(false);

  const [profiles, setProfiles] = useState([])

  useLayoutEffect(() => {
    const fetchAlldogs = async () => {
      const res = await fetchDogs()
      console.log(res);
    };

    fetchAlldogs()

  }, []);

  const renderItem = ({item}) => (
    <ProfileItems
      id={item.id}
      source={item.source}
      purpose={item.purpose}
      isEditing={isEditing}
      ids={[1, 2, 3, 4, 5]}
    />
  );

  return (
    <View style={styles.rootContainer}>
      <FlatList
        key={'#'}
        data={DummyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.flatlist}
        columnWrapperStyle={{justifyContent: 'center', alignItems: 'center'}}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button}>
          내 계정 관리
        </Button>
      </View>
    </View>
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
  }
});
