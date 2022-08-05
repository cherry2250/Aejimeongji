import React, {useCallback} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import DummyData from '../../components/Profile/DummyData';
import ProfileItems from '../../components/Profile/ProfileItems';
import {Colors} from '../../constants/styles';

// 아이템을 parameter로 받아서 profileItems의 parameter로 넘겨줘야함.
const ProfileChoiceScreen = () => {
  // item을 flat list로 rendering
  // 강아지의 모든 정보를 조회 => 이미지를 렌더링
  // 첫 화면에는 무조건

  const renderItem = ({item}) => (
    <ProfileItems id={item.id} source={item.source} />
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
      />
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
});
