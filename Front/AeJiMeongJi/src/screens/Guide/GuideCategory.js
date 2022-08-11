import React, {useState, useEffect} from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../constants/styles';
import {SafeAreaView, ScrollView} from 'react-native';
// import {MarkdownView} from 'react-native-markdown-view';
import Markdown from 'react-native-simple-markdown';
import axios from '../../utils/index';

axios.defaults.withCredentials = true;
const url = 'http://i7d203.p.ssafy.io:8080';

const GuideCategory = props => {
  console.log(props.route.params);
  const [categoryList, setCategoryList] = useState([]);
  console.log(url + '/api/guide?category=' + props.route.params);
  useEffect(() => {
    axios
      .get(url + '/api/guide?category=' + props.route.params)
      .then(response => {
        if (response.status == 200) {
          console.log('건강 카테고리 정보 불러오기 성공');
          setCategoryList(response.data);
        } else {
          console.log(' 건강카테고리 정보를 받아오는데 실패했습니다.');
        }
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View style={styles.GuideTitle}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {/* 가이드 정보가 들어갈 예정{information ? information : '없어'} */}
          </Text>
        </View>
        <View>
          <View style={styles.GuideBox}>
            <View>
              <View style={styles.infoBox}>
                <View style={styles.infoTitle}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    <Text>{categoryList[0].content}</Text>
                    여름철 강아지 건강정보
                    {/* <MarkdownView>{response.data[1]}</MarkdownView> */}
                  </Text>
                </View>
                <View style={styles.infosum}>
                  <Text style={{fontSize: 12}}>지금 바로 알아보세요</Text>
                </View>
              </View>
            </View>
            <View style={styles.GuideImg}>
              {/* <Image
            style={{width: '100%', height: '100%'}}
            source={require('../../Assets/image/3d_dog.png')}
            resizeMode="cover"
          /> */}
              <Text>이미지</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  infoTitle: {},
  infosum: {
    marginTop: 0,
  },
  rootContainer: {
    height: 1400,
  },
  GuideTitle: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  GuideImg: {
    backgroundColor: 'orange',
    borderRadius: 20,
    height: 90,
    width: 90,
    marginLeft: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },

  GuideBox: {
    backgroundColor: Colors.back200,
    flexDirection: 'row',
    borderRadius: 20,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  infoBox: {
    marginLeft: 40,
    marginTop: 22,
    marginBotton: 20,
  },
});
export default GuideCategory;
