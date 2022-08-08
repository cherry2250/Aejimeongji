import React, {useState} from 'react';
import NumericInput from 'react-native-numeric-input';

const Weight = ({weight, setWeight}) => {

<<<<<<< HEAD

=======
>>>>>>> feature/front/프로필
  const changeWeightHandler = changedValue => {
    setWeight(changedValue);
  };

  return (
    <>
      <NumericInput
        type="up-down"
        value={weight}
        onChange={changeWeightHandler}
        totalWidth={200}
        totalHeight={50}
        iconSize={25}
        step={0.1}
        valueType="real"
        rounded
        textColor="#90560D"
        iconStyle={{color: '#90560D'}}
<<<<<<< HEAD
=======
        initValue={weight}
>>>>>>> feature/front/프로필
      />
    </>
  );
};

export default Weight;
