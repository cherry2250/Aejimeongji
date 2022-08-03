import {Button} from '@rneui/base';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Colors} from '../../constants/styles';

const DatePick = ({inputChangeHandler, inputValues, title, indentifier}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [newDate, setNewDate] = useState('');
  const formatDate = date => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  };

  const dateConfirmHandler = (identifier, enterdValue) => {
    const fetchDate = formatDate(enterdValue);
    setNewDate(fetchDate);
    inputChangeHandler(identifier, fetchDate);
    setOpen(false);
  };

  return (
    <>
      <View style={styles.dateContainer}>
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>
            {!newDate ? title : newDate}
          </Text>
        </View>
        <View style={styles.dateButtonContainer}>
          <Button title="달력 보기" type="clear" onPress={() => setOpen(true)} />
        </View>
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={dateConfirmHandler.bind(this, indentifier)}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DatePick;

const styles = StyleSheet.create({
  dateTitle: {
    // flex: 1,
    color: '#90560D',
    fontSize: 18,
    marginTop: 30,
    marginBottom: 22,
    fontWeight: 'bold',
  },
  dateContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateTextContainer: {
    minWidth: '50%',
    padding: 14,
    marginHorizontal: 30,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.ProfileInputBorder,
    backgroundColor: Colors.ProfileInputBorder,
    justifyContent: 'center',
  },
  dateText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dateButtonContainer: {},
});
