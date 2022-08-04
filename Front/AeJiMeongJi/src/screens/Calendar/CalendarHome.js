import React, {useState} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Avatar, Button, Card, Title, Typography} from 'react-native-paper';

import {Colors} from '../../constants/styles';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Navbar from './../../components/nav/Navbar';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const CalendarHome = ({navigation}) => {
  const [items, setItems] = useState({});

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity style={styles.item}>
        <Card>
          <Card.Content>
            <View>
              <Text>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.rootContainer}>
      {/* <Navbar /> */}
      <View style={styles.nav}>
        <Image
          style={styles.logo2}
          resizeMode="contain"
          source={require('../../Assets/image/logo2.png')}
        />
      </View>
      <View style={styles.contentbox}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2022-08-04'}
          renderItem={renderItem}
          theme={{
            calendarBackground: '#FFFDF8',
            agendaKnobColor: Colors.btnBack100,
            agendaDayTextColor: Colors.contentText,
            agendaDayNumColor: Colors.contentText,
            agendaTodayColor: 'red',
            agendaBackground: 'red',
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('TodoUpload');
        }}
        style={{paddingLeft: 24}}>
        <Image
          style={styles.plusButton}
          resizeMode="contain"
          source={require('../../Assets/image/plusButton.png')}
          title="plusButton"
        />
      </TouchableOpacity>
    </View>
  );
};
export default CalendarHome;

const styles = StyleSheet.create({
  font: {
    fontFamily: 'ONE Mobile POP',
  },
  contentFont: {
    fontFamily: 'ONE Mobile Regular',
    fontWeight: 'bold',
  },

  mainText: {
    fontSize: 20,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },
  subText: {
    fontSize: 18,
    lineHeight: 40,
    letterSpacing: 4,
    color: Colors.contentText,
  },

  contentText: {
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 2,
    color: Colors.contentText,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.back100,
  },
  nav: {
    height: 50,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentbox: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.back100,
  },

  logo2: {
    marginTop: 10,
    maxWidth: '50%',
    maxHeight: '60%',
  },
  runicon: {
    marginTop: 5,
    maxWidth: '70%',
    maxHeight: '60%',
  },
  calendarLogo: {
    marginTop: 5,
    marginRight: 10,
    maxWidth: '40%',
    maxHeight: '80%',
  },
  logo: {
    marginTop: 50,
    maxWidth: '60%',
    maxHeight: '30%',
  },
  item: {
    backgroundColor: Colors.back100,
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  plusButton: {
    borderWidth: 1,
    position: 'absolute',
    bottom: 60,
    right: 20,
    alignSelf: 'flex-end',
    marginTop: 5,

    maxWidth: '10%',
    maxHeight: '10%',
  },
});
