import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {placeActions} from '../../store/place';
import {fetchPlace} from '../../utils/place';
import CarouselItem from './CarouselItem';

const CarouselList = ({lat, lng, source}) => {
  const [data, setData] = useState({
    음식점: '',
    관광지: '',
    숙소: '',
    캠핑: '',
    쇼핑: '',
    호텔링: '',
  });
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const initialData = async () => {
      setLoading(true);
      const categories = ['음식점', '관광지', '숙소', '캠핑', '쇼핑', '호텔링'];
      const promises = await Promise.all(
        categories.map(category => {
          return fetchPlace(category, lat, lng);
        }),
      );
      for (let index = 0; index < categories.length; index++) {
        setData(cur => {
          return {
            ...cur,
            [categories[index]]: promises[index],
          };
        });
      }
      setLoading(false);
    };
    initialData();
  }, []);

  return (
    <>
      {loading && <ActivityIndicator size="large" color="#aaa" />}
      <View>
        <CarouselItem
          category={'음식점'}
          lat={lat}
          lng={lng}
          source={source}
          data={data?.음식점}
        />
      </View>
      <View>
        <CarouselItem
          category={'관광지'}
          lat={lat}
          lng={lng}
          source={source}
          data={data?.관광지}
        />
      </View>
      <View>
        <CarouselItem
          category={'숙소'}
          lat={lat}
          lng={lng}
          source={source}
          data={data?.숙소}
        />
      </View>
      <View>
        <CarouselItem
          category={'캠핑'}
          lat={lat}
          lng={lng}
          source={source}
          data={data?.캠핑}
        />
      </View>
      <View>
        <CarouselItem
          category={'쇼핑'}
          lat={lat}
          lng={lng}
          source={source}
          data={data?.쇼핑}
        />
      </View>
      <View>
        <CarouselItem
          category={'호텔링'}
          lat={lat}
          lng={lng}
          source={source}
          data={data?.호텔링}
        />
      </View>
    </>
  );
};

export default CarouselList;
