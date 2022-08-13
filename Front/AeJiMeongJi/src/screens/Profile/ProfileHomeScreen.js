import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import DropDownPicker from 'react-native-dropdown-picker';
import ProfileImage from '../../components/Profile/ProfileImage';
import ProfileInput from '../../components/Profile/ProfileInput';
import SearchBreed from '../../components/Profile/SearchBreed';
import Button from '../../components/ui/Button';
import {Colors} from '../../constants/styles';

const ProfileHomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [value, setValue] = useState(null);
  const [gender, setGender] = useState([
    {label: '수컷', value: 'MALE'},
    {label: '암컷', value: 'FEMALE'},
  ]);

  const [image, setImage] = useState(require('../../Assets/image/Profile.png'));

  const [visible, setVisible] = useState(null);

  const closeModalHandler = () => {
    setVisible(false);
  };

  const goNextPage = () => {
    navigation.navigate('ProfileHome2', {
      name,
      gender: value,
      breed,
      image,
    });
  };

  const inputChangeHandler = entredValue => {
    setName(() => {
      return entredValue;
    });
  };

  const [open, setOpen] = useState(false);

  return (
    <Pressable style={styles.rootContainer} onPress={closeModalHandler}>
      <ProfileImage image={String(image)} setImage={setImage} />
      <View style={styles.inputContainer}>
        <View>
          <ProfileInput
            textInputConfig={{
              placeholder: '반려견 이름',
              placeholderTextColor: '#6D6D6D',
              onChangeText: inputChangeHandler,
            }}
            style={styles.profileInput}
            visible={visible}
          />
        </View>
        <View style={styles.genderContainer}>
          <DropDownPicker
            placeholder="성별"
            placeholderStyle={{
              textAlign: 'center',
              color: '#6D6D6D',
            }}
            open={open}
            value={value}
            items={gender}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setGender}
            style={styles.input}
            containerStyle={styles.containerStyle}
          />
          <SearchBreed setBreed={setBreed} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={goNextPage}>
          다음
        </Button>
      </View>
    </Pressable>
  );
};

export default ProfileHomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.back100,
  },
  inputContainer: {
    flex: 2,
    width: responsiveWidth(70),
  },
  profileInput: {
    marginTop: responsiveHeight(10),
  },
  button: {
    width: responsiveWidth(50),
    height: responsiveHeight(8),
    borderRadius: responsiveWidth(10),
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  genderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    flex: 1,
    marginRight: responsiveWidth(1),
  },
  input: {
    borderRadius: responsiveWidth(10),
    borderColor: Colors.ProfileInputBorder,
    backgroundColor: Colors.ProfileInputBorder,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchBox: {
    flex: 1,
  },
});
