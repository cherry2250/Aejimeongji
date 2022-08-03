import {Avatar} from '@rneui/themed';
import React, {useRef, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import UploadModeModal from './UploadModeModal';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const ProfileImage = ({visible}) => {
  const imagePickerOption = {
    mediaType: 'photo',
    maxWidth: 230,
    maxHeight: 172,
    includeBase64: Platform.OS === 'android',
    saveToPhotos: true
  };

  const [ProfileImage, setProfileImage] = useState(
    require('../../Assets/image/Profile.png'),
  );
  const onPickImage = res => {
    if (res.didCancel || !res) {
      return;
    }
    console.log(res.assets[0].uri);
    setProfileImage(res.assets[0].uri)
  };
  const imageAddBtn = require('../../Assets/image/imgAddBtn.png');
  const fileInput = useRef(null);
  const [modalVisible, setModalVisible] = useState(visible);

  const addPhotoHandler = () => {
    setModalVisible(true);
  };

  const closeModalHandler = () => {
    setModalVisible(false);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
  };

  const onLaunchCamera = async () => {
    await launchCamera(imagePickerOption, onPickImage);
  };

  return (
    <>
      {modalVisible && (
        <UploadModeModal
          visible={modalVisible}
          onClose={closeModalHandler}
          onLaunchImageLibrary={onLaunchImageLibrary}
          onLaunchCamera={onLaunchCamera}
        />
      )}
      <View style={styles.ImgContainer}>
        <Avatar
          source={ProfileImage}
          size={'xlarge'}
          activeOpacity={0.2}
          containerStyle={styles.Avatar}
          overlayContainerStyle={styles.Avatar}
        />
        {/* 사진 추가 */}
        <Pressable onPress={addPhotoHandler}>
          <Image source={imageAddBtn} style={styles.imageAddBtn} />
        </Pressable>
      </View>
    </>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  Avatar: {
    borderRadius: 90,
    width: 230,
    height: 172,
  },
  ImgContainer: {
    marginTop: 30,
    position: 'relative',
  },
  imageAddBtn: {
    position: 'absolute',
    borderRadius: 90,
    width: 40,
    height: 40,
    left: 170,
    bottom: 0,
  },
});