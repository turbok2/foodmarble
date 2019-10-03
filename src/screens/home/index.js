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
  Right,
  Body,
  Footer,
  Item, 
  Input,
  Card,
  CardItem,
  FooterTab
} from "native-base";

import styles from "./styles";
import ListThumbnailCity from  "../../Components/ListThumbnailCity"
import CardList from  "../../Components/cardList"


const launchscreenBg = require("../../../assets/foodmarble-bg.png");


class Home extends Component {
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

        <Content >
          <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
            <View style={{ marginTop: 100, alignItems : "center" }}>
              <H3 style={styles.text,{ color: "#ffffff"}}>어디로 먹으러 갈까요</H3>
            </View>
            <View style={{ marginTop: 40, alignItems : "center" }}>
              <Item regular style={{backgroundColor:"#ffffff", width:"80%"}} >
                <Icon active name='search' />
                <Input placeholder='원하는 음식여행지를 검색' style={{backgroundColor:"#ffffff"}}  />
              </Item>
            </View>
            {/* <Image source = {require("../../../assets/foodmarble-logo.png")} />      */}
            <View style={{backgroundColor:"#FFFFFF", margin : 20}}>
              <H1>인기 먹거리 여행지</H1>
              <ListThumbnailCity 
                style={{marginTop: 40}}
              />   
            </View>
            <CardList />
            {/* <View style={{margin : 20}}>
              <Card style={{flex: 0}}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>백종원 3대천왕 지역탐방</Text>
                      <Text note>위치에 따라 추천해주는 TV맛집코스</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image 
                    source={require("../../../assets/card1.png")} style={{ resizeMode: "stretch",
                    width: null,
                    flex:1}
                  }/>
                </CardItem>
              </Card>            
            </View> */}
    
          </ImageBackground>                    
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

export default Home;
