import React from 'react';
import {SafeAreaView} from 'react-native';
import DogInfo from '../../components/Place/DogInfo';

const PlaceHome = () => {
  return <SafeAreaView>
    <View>
        <DogInfo />
    </View>
  </SafeAreaView>;
};

export default PlaceHome;
