import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants/styles';
import {useDispatch, useSelector} from 'react-redux';
import RunButton from '../../components/ui/RunButton';
import RunButton2 from '../../components/ui/RunButton2';
import {fetchDogs, getDog} from '../../utils/profile';
import {profileActions} from '../../store/profile';

const RunningHome = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dogId = useSelector(state => state.profile.id);
  const [dogName, setDogName] = useState();
  const [dogWeight, setDogWeight] = useState();
  const [dogBreed, setDogBreed] = useState();
  const [dogImage, setDogImage] = useState();
  const imageurl = 'http://i7d203.p.ssafy.io:8080/api/image/';
  useLayoutEffect(() => {
    const fetchInitialData = async () => {
      const res = await getDog(dogId);

      if (res) {
        setDogName(res.name);
        setDogWeight(res.weight);
        setDogBreed(res.breedName);
        setDogImage(res.imageName);
      }
    };
    fetchInitialData();
  }, []);

  const goToRunning = () => {
    navigation.navigate('RunningProfile', {dogId});
  };

  return (
    <View style={styles.rootContainer}>
      <View>
        <View style={styles.runimgBox}>
          <Image
            style={styles.runImg}
            source={require('../../Assets/image/3d_dog.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentBox}>
          <View style={styles.profileBox}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.profileImg}>
                <Image
                  style={{width: '100%', height: '100%', borderRadius: 100}}
                  source={{uri: imageurl + dogImage}}
                  resizeMode="cover"
                />
              </View>
              <View>
                <View style={styles.infoBox}>
                  <View style={styles.infoName}>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(3.5),
                        fontFamily: '??????????????????',
                      }}>
                      {dogName}
                    </Text>
                  </View>
                  <View style={styles.infoCate}>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(1.8),
                        fontFamily: 'IBMPlexSansKR-Regular',
                      }}>
                      {dogWeight}kg, {dogBreed}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.RunTime}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.2),
                  fontFamily: 'IBMPlexSansKR-Regular',
                }}>
                ?????? ??????????????? 1??? 30????????????.
              </Text>
            </View>
          </View>
          <View style={styles.runButton}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <RunButton onPress={goToRunning} styel={styles.runLoginButton}>
                ?????? ????????????
              </RunButton>
              <RunButton2
                onPress={() => {
                  navigation.navigate('RunningInfo');
                }}>
                ?????? ????????????
              </RunButton2>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.centeredView}>
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('????????? ???????????? ???????????????.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{flexDirection: 'row', alignContent: 'center'}}>
                <Text style={styles.modalTitle}>
                  ???? ????????? ?????? ???????????? ????
                </Text>
              </View>
              <Text style={styles.modalText}>
                -??????, ??????, ??????????????? ????????????????
              </Text>
              <Text style={styles.modalText}>
                -???????????? ????????? ????????? ???????????????
              </Text>
              <Text style={styles.modalText}>
                -????????? ?????? ??? ????????? ??????????????????
              </Text>
              <Text style={styles.modalText}>
                -????????? ????????? ????????? ????????????
              </Text>
              <Text style={styles.modalText}>
                -????????? ????????? ????????? ???????????????
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: responsiveHeight(1),
                }}>
                <RunButton
                  onPress={() => {
                    navigation.navigate('RunningProfile');
                  }}>
                  <Text style={styles.textStyle}>??????</Text>
                </RunButton>
                <RunButton2
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>??????</Text>
                </RunButton2>
              </View>
            </View>
          </View>
        </Modal> */}
      </View>
    </View>
  );
};

export default RunningHome;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.back100,
  },
  infoName: {},
  infoCate: {
    marginTop: responsiveHeight(1),
  },
  RunTime: {
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(2),
    alignItems: 'center',
  },
  runImg: {
    flex: 1,
    marginTop: 0,
    maxWidth: '100%',
    borderRadius: 20,
  },
  profileImg: {
    backgroundColor: 'orange',
    borderRadius: 200,
    height: responsiveHeight(15),
    width: responsiveWidth(30),
    marginLeft: responsiveWidth(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  runButton: {
    marginLeft: responsiveWidth(6.3),
    marginRight: responsiveWidth(6.3),
  },
  contentBox: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: Colors.back200,
    marginBottom: responsiveHeight(0.6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  runimgBox: {
    flex: 1,
    marginBottom: responsiveHeight(0.6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  profileBox: {
    marginBottom: responsiveHeight(3),
  },
  infoBox: {
    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(4),
    marginBotton: responsiveHeight(1),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
  },
  modalView: {
    margin: responsiveHeight(5),
    backgroundColor: Colors.back100,
    borderRadius: 20,
    padding: responsiveHeight(5),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(3.5),
    textAlign: 'center',
  },

  modalText: {
    fontSize: responsiveFontSize(1.7),
    marginBottom: responsiveHeight(2),
    textAlign: 'center',
  },
});
