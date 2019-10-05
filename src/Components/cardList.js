import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,View } from 'native-base';

const card1 = require("../../assets/card1.png");
const card2 = require("../../assets/card2.jpg");
const card3 = require("../../assets/card3.jpg");
const card4 = require("../../assets/card4.jpg");

const cards = [
  {
    text: "백종원 3대천왕 지역탐방1",
    note: "위치에 따라 추천해주는 TV맛집코스1",
    img: card1
  },
  {
    text: "백종원 3대천왕 지역탐방2",
    note: "위치에 따라 추천해주는 TV맛집코스2",
    img: card2
  },
  {
    text: "백종원 3대천왕 지역탐방3",
    note: "위치에 따라 추천해주는 TV맛집코스3",
    img: card3
  },
  {
    text: "백종원 3대천왕 지역탐방4",
    note: "위치에 따라 추천해주는 TV맛집코스4",
    img: card4
  },      
];

const result = cards.map((item, index) => (
  <Card key={index}>
    <CardItem >
      <Body>
        <Text>{item.text}</Text>
        <Text note>{item.note}</Text>
      </Body>
    </CardItem>    
    <CardItem >
      <Image 
        source={item.img} style={{ flex:1, width:'100%',resizeMode: 'contain'}}/>
    </CardItem>    
  </Card>
));

export default  class CardList extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }
  


  render() {
    return (
      <Content
        style={{margin : 20}}
      >{result}</Content>
    );
  }
}