import React, { Component } from "react";
import {  ImageBackground, View, Image } from "react-native";
import { Container, 
  Button, 
  H1, 
  H3, 
  Text,
  Content,
  Header,  
  Icon,
  Left,
  Title,
  Right,
  Body,
  Footer,
  Thumbnail,
  Item, 
  Input,
  Card,
  CardItem,
  FooterTab
} from "native-base";

import styles from "./styles";
const pick1 = require("../../../assets/pick_food1.png");
const pick2 = require("../../../assets/notyet.png");
const pick3 = require("../../../assets/notyet.png");

const picks = [
  {
    img: pick1,
    text: "막국수",
  },
  {
    img: pick2,
    text: "notyet",
  },
  {
    img: pick3,
    text: "notyet",
  },
];

class SelectFood extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: "#ffffff" }}
          androidStatusBarColor="#ffffff"
          iosBarStyle="light-content"
        >
          <Left  style={{ flex:1, backgroundColor: "#ffffff" }}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              {/* <Icon name="menu" style={{ color: "#000000" }} /> */}
              <Image source = {require("../../../assets/menu-icon.png")}
              style={{ width: 30, height: 30 }}/>
            </Button>
          </Left>
          <Body style={{ flex:3,alignItems:'center'}}>
            {/* <Title style={{ color: "#000000" }}>Custom Header</Title> */}
            <Image source = {require("../../../assets/foodmarble-logo.png")} style={{ width: 50, height: 50 }}/>
          </Body>
          <Right  >
          </Right>
        </Header>
        <Header
          style={{ backgroundColor: "#dc4239" }}
          androidStatusBarColor="#dc2015"
          iosBarStyle="light-content"
        >
          <Left style={{flex:1}}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: "#FFF" }} />
            </Button>
          </Left>
          <Body style={{flex:5, flexDirection:"row"}}>
            <Image source = {require("../../../assets/search.png")}
              style={{ width: 30, height: 30 }}/>
            <Title style={{ color: "#FFF", paddingLeft:20 }}>춘천에 대한 검색 결과</Title>
          </Body>
          <Right />
        </Header>
        <Content >
          <Image source = {require("../../../assets/reasult_foods.png")}
              style={{ resizeMode: "stretch", width: null, flex:1 }}/>
          <H1 style={{marginTop:20 }}>태그</H1>
          <View style={{flexDirection:"row"}}>
            <Button small rounded style={{backgroundColor: "#f06e9c", paddingLeft:10}}>
              <Text>맛집여행</Text>
            </Button>
            <Button small rounded style={{backgroundColor: "#dc6cf4",paddingLeft:10}}>
              <Text>소양강댐</Text>
            </Button>
          </View>
          <View style={{flexDirection:"row"}}>
            <Button small block style={{backgroundColor: "#3c6bb1",paddingLeft:10}}>
              <Text>가족들과 즐거운 여행</Text>
            </Button>
            <Button small block style={{backgroundColor: "#2fa5e5",paddingLeft:10}}>
              <Text>즐거운</Text>
            </Button>
            <Button small block style={{backgroundColor: "#dc6cf4",paddingLeft:10}}>
              <Text>자전거코스</Text>
            </Button>
          </View>
          <View style={{marginTop:20 ,flexDirection:"row", justifyContent:'space-around' }}>
            <View>
              <Image source = {require("../../../assets/heart.png")}
                  style={{ width: 30, height: 30 }}/>
              <H1 style={{paddingLeft:20}}>먹고 싶은 음식</H1>
            </View>
            <View>
              <H3>total </H3><H3>1</H3>
            </View>
          </View>            
          <View style={{marginTop:20 ,flexDirection:"row", justifyContent:'space-around'}}>
            <Thumbnail large source={pick1} />
            <Thumbnail large source={pick2} />
            <Thumbnail large source={pick3} />
          </View>
          <View style={{marginTop:10 ,flexDirection:"row", justifyContent:'space-around' }}>
            <H1>첫번째</H1>
            <H1>두번째</H1>
            <H1>세번째</H1>
          </View>
          <Button big block style={{marginTop:40 ,margin:20, backgroundColor: "#dc4239",paddingLeft:10}}>
              <Text>선택 음식 코스 추천</Text>
          </Button>
        </Content>


        <Footer 
        >
          <FooterTab  >
            <Button active full backgroundColor="#ed6937">
            <Image source = {require("../../../assets/favorite-icon.png")}
              style={{ width: 30, height: 30 }}/>
            </Button>
            <Button active full  backgroundColor="#ed6937">
            <Image source = {require("../../../assets/chat-icon.png")}
              style={{ width: 30, height: 30 }}/>
            </Button>
            <Button active full  backgroundColor="#ed6937">
            <Image source = {require("../../../assets/people-icon.png")}
              style={{ width: 30, height: 30 }}/>
            </Button>                        
          </FooterTab>
    
        </Footer>        
      </Container>
    );
  }
}

export default SelectFood;
