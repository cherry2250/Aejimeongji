import {Avatar} from '@rneui/themed';
import React, {useRef, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import UploadModeModal from './UploadModeModal';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

const ProfileImage = ({visible, image, setImage}) => {
  const imagePickerOption = {
    mediaType: 'photo',
    maxWidth: 230,
    maxHeight: 172,
    includeBase64: Platform.OS === 'android',
    saveToPhotos: true,
  };

  const [preview, setPreview] = useState(null);

  // RNF

  const onPickImage = async res => {
    if (res.didCancel || !res) {
      return;
    }

    // console.log(res.assets[0].base64);

    // const RNFS = require('react-native-fs');
    // const imagePath = `${
    //   RNFS.DocumentDirectoryPath
    // }/${new Date().toISOString()}.jpg`.replace(/:/g, '-');
    // console.log(imagePath);

    // const move = await RNFS.writeFile(imagePath, res.assets[0].base64, 'base64')
    // console.log(move);

    // if (Platform.OS === 'ios') {
    //   RNFS.copyAssetsFileIOS(res.assets[0].uri, imagePath, 0, 0)
    //     .then(res => {})
    //     .catch(err => {
    //       console.log('ERROR: image file write failed!!!');
    //       console.log(err.message, err.code);
    //     });
    // } else if (Platform.OS === 'android') {
    //   RNFS.copyFile(res.assets[0].uri, imagePath)
    //     .then(res => {
    //     })
    //     .catch(err => {
    //       console.log('ERROR: image file write failed!!!');
    //       console.log(err.message, err.code);
    //     });
    // }

    // 여기서 axios 요청
    // console.log(res);
    // const pickedImage = require(res.assets[0].uri)
    setImage(res.assets[0]);
    setPreview(res.assets[0].uri);
    // setPreview(pickedImage)
  };
  const imageAddBtn = require('../../Assets/image/plusButton.png');
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
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // }).then(image => {
    //   console.log(image);
    // });
  };

  const onLaunchCamera = async () => {
    await launchCamera(imagePickerOption, onPickImage);
    //   ImagePicker.openCamera({
    //     width: 300,
    //     height: 400,
    //     cropping: true,
    //     cropperCircleOverlay: true,
    //     includeExif: true
    //   }).then(image => {
    //     console.log(image);
    //     setImage(image)
    //   });
    //   ImagePicker.openCamera({
    //     width: 300,
    //     height: 400,
    //     cropping: true,
    //     cropperCircleOverlay: true,
    //     includeExif: true
    //   }).then(image => {
    //     console.log(image);
    //     setImage(image)
    //   });
  };

  return (
    <>
      {/* {modalVisible && (
        <UploadModeModal
          visible={modalVisible}
          onClose={closeModalHandler}
          onLaunchImageLibrary={onLaunchImageLibrary}
          onLaunchCamera={onLaunchCamera}
        />
      )} */}
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
          source={
            preview === null
              ? require('../../Assets/image/Profile.png')
              : {
                  uri: preview,
                  cache: 'reload',
                }
          }
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
