import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
// import { List, ListItem } from 'react-native-elements'
import {
  Container,
  H1, H2, H3, H4, H5,
  Header,
  Title,
  Content,
  Button,
  Icon,
  View,
  Thumbnail,
  List,
  ListItem,
  Text,
  Image,
  Left,
  Right,
  Body
} from "native-base";

const pick1 = require("../../assets/pick_food1.png");
const pick2 = require("../../assets/pick_food2.png");
const pick3 = require("../../assets/pick_food3.png");
const footerBg = require("../../assets/footer-bg.png");
const starIcon = require("../../assets/star-icon.png");


const food1_1 = require("../../assets/food1_1.png");
const food1_2 = require("../../assets/food1_2.png");
const food1_3 = require("../../assets/food1_3.png");
const food1_4 = require("../../assets/food1_4.png");
const food1_5 = require("../../assets/food1_5.png");

const bestfood1 = [
  {
    img: food1_1,
    selected_id : '1_1',
    name: "유포리막국수",
    latitude: 37.9461346,
    longitude: 127.77824129999999,
    addr: "강원도 춘천시 신북읍 유포리 62-2",
    tel : '033-242-5168',
    url : 'https://blog.naver.com/rubia486/221645583760',
    info: "매일 11:00 - 19:30(명절 2일 휴무)"
  },
  {
    img: food1_2,
    selected_id : '1_2',
    name: "명가막국수",
    latitude: 37.93294340000001,
    longitude: 127.79188309999995,
    addr: "강원도 춘천시 신북읍 천전리 39-7",
    tel : '033-241-8443',
    url : 'http://myeongga.ktib.co.kr/',
    info: "매일 10:00 - 21:00"
  },
  {
    img: food1_3,
    selected_id : '1_3',
    name: "샘밭막국수",
    latitude: 37.9295615,
    longitude: 127.78120779999995,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    addr: "강원도 춘천시 신북읍 천전리 118-23",
    tel : '033-241-1712',
    url : 'http://jobean0523.modoo.at/',
    info: "매일 10:00 - 21:00(명절 휴무)"
  },
  {
    img: food1_4,
    selected_id : '1_4',
    name: "부안막국수",
    latitude: 37.8816598,
    longitude: 127.74964069999999,
    addr: "강원도 춘천시 후평동 429-17",
    tel : '033-254-0654',
    url : 'https://blog.naver.com/oiktoail/221644022554',
    info: "매일 11:00 - 7:30(명절 휴무)"
  },
  {
    img: food1_5,
    selected_id : '1_5',
    name: "오수물막국수",
    latitude: 37.9378277,
    longitude: 127.77708080000002,
    addr: "강원도 춘천시 신북읍 천전리 585",
    tel : '033-242-4714',
    url : 'https://blog.naver.com/sexypcm',
    info: "매일 11:30 - 21:30(연중무휴)"
  }      
];

const food2_1 = require("../../assets/food2_1.png");
const food2_2 = require("../../assets/food2_2.png");
const food2_3 = require("../../assets/food2_3.png");
const food2_4 = require("../../assets/food2_4.png");
const food2_5 = require("../../assets/food2_5.png");

const bestfood2 = [
  {
    img: food2_1,
    selected_id : '2_1',
    name: "산토리니",
    latitude: 37.8914143,
    longitude: 127.7764909,
    addr: "강원도 춘천시 동면 장학리 144-16",
    tel : '033-242-3010',
    url : 'http://춘천산토리니.com/',
    info: "매일 10:00 - 23:00"
  },
  {
    img: food2_2,
    selected_id : '2_2',
    name: "라뜰리에 김가",
    latitude: 37.8843694,
    longitude: 127.77804579999997,
    addr: "강원도 춘천시 동면 만천리 326-3",
    tel : '033-252-5756',
    url : 'https://www.instagram.com/latelier_kimga_/',
    info: "매일 10:00 - 23:00"
  },
  {
    img: food2_3,
    selected_id : '2_3',
    name: "어스17",
    latitude: 37.93280939999999,
    longitude: 127.79408360000002,
    addr: "강원도 춘천시 신북읍 천전리 34-5",
    tel : '033-244-7877',
    url : 'http://earth17.modoo.at/',
    info: "매일 10:00 - 24:00"
  },
  {
    img: food2_4,
    selected_id : '2_4',
    name: "마이 브런치 카페",
    latitude: 37.85558699999999,
    longitude: 127.75785189999999,
    addr: "강원도 춘천시 동내면 거두리 1113-1",
    tel : '033-263-5252',
    url : 'http://blog.naver.com/gaeng82913',
    info: "매일 9:00 - 17:00(월요일 휴무)"
  },
  {
    img: food2_5,
    selected_id : '2_5',
    name: "쿠폴라",
    latitude: 37.89295930000001,
    longitude: 127.77684780000004,
    addr: "강원도 춘천시 동면 장학리 139-78",
    tel : '033-252-1154',
    url : 'https://blog.naver.com/storyshower/221658843892',
    info: "매일 11:00 - 24:00"
  }      
];

const food3_1 = require("../../assets/food3_1.png");
const food3_2 = require("../../assets/food3_2.png");
const food3_3 = require("../../assets/food3_3.png");
const food3_4 = require("../../assets/food3_4.png");
const food3_5 = require("../../assets/food3_5.png");

const bestfood3 = [
  {
    img: food3_1,
    selected_id : '3_1',
    name: "남춘천닭갈비",
    latitude: 37.8629041,
    longitude: 127.72346670000002,
    addr: "강원도 춘천시 퇴계동 876-6",
    tel : '033-242-4947',
    url : 'http://deliciousnc.modoo.at/',
    info: "매일 10:00 - 22:00"
  },
  {
    img: food3_2,
    selected_id : '3_2',
    name: "춘천통나무집닭갈비",
    latitude: 37.9330983,
    longitude: 127.79336839999996,
    addr: "강원도 춘천시 신북읍 천전리 38-26",
    tel : '033-241-5999',
    url : 'http://www.chdakgalbi.com/',
    info: "매일 10:30 - 21:30"
  },
  {
    img: food3_3,
    selected_id : '3_3',
    name: "춘천명물닭갈비",
    latitude: 37.8696168,
    longitude: 127.70635820000007,
    addr: "강원도 춘천시 삼천동 37-91",
    tel : '033-257-3069',
    url : 'http://www.ccmm.kr/',
    info: "매일 11:00 - 22:00"
  },
  {
    img: food3_4,
    selected_id : '3_4',
    name: "토담숯불닭갈비",
    latitude: 37.9294243,
    longitude: 127.78302480000002,
    addr: "강원도 춘천시 신북읍 천전리 90-12",
    tel : '033-241-5392',
    url : 'http://www.todamdak.com/',
    info: "매일 11:00 - 22:00(연중 휴무)"
  },
  {
    img: food3_5,
    selected_id : '3_5',
    name: "남춘천명물닭갈비",
    latitude: 37.8633215,
    longitude: 127.7235412,
    addr: "강원도 춘천시 퇴계동 875-2",
    tel : '033-254-9922',
    url : 'http://blog.naver.com/kimjokyu',
    info: "매일 10:00 - 22:00"
  }      
];

function ListThumbnailFood({ onPress, num }){
  state = {
    // targetfood : bestfood1
  };
  let targetfood=bestfood1
  switch (num) {
    case 1 :
      targetfood = bestfood1
      break;
    case 2 :
      targetfood = bestfood2
      break;
    case 3 :
      targetfood = bestfood3
      break;
  } 
  return (
    <View>  
      <List 
        horizontal={false}
        dataArray={targetfood}
        renderRow={data =>
          <ListItem style={{ marginLeft:0}}
            avatar
            onPress={onPress.bind(this,data)}
          >
            <Body style={{marginLeft:5}}>
              <View style={{flexDirection:"row", marginLeft:0}}>
                <View style={{flex:2}}>
                  <Thumbnail small source={data.img}  />                  
                </View>
                <View style={{flexDirection:"column", flex:15, alignItems:"flex-start", marginLeft: 3}}>
                  <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                    <View style={{flex:7}} ><H3>{data.name}</H3></View>
                    <View style={{flex:3,flexDirection:"row", justifyContent:'flex-end', marginRight:5}}>
                      <Thumbnail source = {starIcon} style={{width:10, height:10}} />
                      <Thumbnail source = {starIcon} style={{width:10, height:10}} />
                      <Thumbnail source = {starIcon} style={{width:10, height:10}} />
                    </View>
                  </View>
                  
                  <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                    <Text note> {data.addr} </Text>
                    <Text note style={{fontWeight:"bold"}}> {data.tel} </Text>
                  </View>                
                </View> 
              </View>

            </Body>
          </ListItem>}
      />
    </View>          
  );
  }
export default  ListThumbnailFood;