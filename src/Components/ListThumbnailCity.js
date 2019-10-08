import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
// import { List, ListItem } from 'react-native-elements'
import {
  Container,
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
  Left,
  Right,
  Body
} from "native-base";

const city1 = require("../../assets/city1.png");
const city2 = require("../../assets/city2.png");
const city3 = require("../../assets/city3.png");
const city4 = require("../../assets/city4.png");

const citys = [
  {
    img: city1,
    text: "춘천",
    note: "강원도,대한민국"
  },
  {
    img: city2,
    text: "강릉",
    note: "강원도,대한민국"
  },
  {
    img: city3,
    text: "속초",
    note: "강원도,대한민국"
  },
  {
    img: city4,
    text: "고성",
    note: "강원도,대한민국"
  }
];

// export default class ListThumbnailCity extends Component {
function ListThumbnailCity({ onPress }){
  state = {
    citys
  };

  return (
    <View>
      <List 
        horizontal={true}
        dataArray={citys}
        renderRow={data =>
          <ListItem style={{ marginLeft:5,}}
            avatar
            onPress={onPress.bind(this,data)}
          >
            <Body style={{ marginLeft:5}}>
              <Thumbnail large source={data.img} />
              <View style={{alignItems:"center"}}>
                <Text>
                  {data.text}
                </Text>
                <Text numberOfLines={1} note>
                  {data.note}
                </Text>
              </View>
            </Body>
          </ListItem>}
      />
    </View>          
  );
  }
export default  ListThumbnailCity;