import {Button} from '@rneui/themed';
import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import ProfileInput from './ProfileInput';

const ProfileModal = ({
  visible,
  setVisible,
  changeInfoHandler,
  fetchChangedInfo,
  userInfo,
  closeModalHandler,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setVisible(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ProfileInput
            textInputConfig={{
              placeholder: '비밀번호를 입력해주세요.',
              onChangeText: changeInfoHandler.bind(this, 'password'),
              value: userInfo.password,
              secureTextEntry: true,
            }}
          />
          <View style={styles.modalBtnContainer}>
            <Button
              title={'변경하기'}
              type="clear"
              onPress={fetchChangedInfo}></Button>
            <Button
              title={'취소'}
              onPress={closeModalHandler}
              type="clear"></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  modalBtnContainer: {
    flexDirection: 'row',
  },
});
