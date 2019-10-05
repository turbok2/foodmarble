import React, { Component } from "react";
import {  ImageBackground, View, Image } from "react-native";
import { Container, 
  Button, 
  H1, 
  H2,
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
  FooterTab,
  StyleProvider,
} from "native-base";

import MapView,{PROVIDER_GOOGLE} from 'react-native-maps'; // 지도 라이브러리

import styles from "./styles";
const footerBg = require("../../../assets/footer-bg.png");


class ResultPath extends Component {
  state = {
    active: "home"
  }
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: "#ffffff" }}
          androidStatusBarColor="#ffffff"
          iosBarStyle="light-content"
        >
          <Left  style={{ flex:1, backgroundColor: "#ffffff" }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Image source = {require("../../../assets/back-icon.png")}
              style={{ width: 25, height: 25 }}/>
            </Button>            
          </Left>
          <Body style={{ flex:3,alignItems:'center'}}>
            <Image source = {require("../../../assets/foodmarble-logo.png")} style={{ width: 50, height: 50 }}/>
          </Body>
          <Right  style={{ flex:1, backgroundColor: "#ffffff" }} >
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Image source = {require("../../../assets/menu-icon.png")}
              style={{ width: 30, height: 30 }}/>
            </Button>          
          </Right>
        </Header> 

        <Content  >  
          <View>
            <ImageBackground source = {footerBg} style={{flexDirection: "row", width:'100%', height: 50, resizeMode: 'contain', alignItems:'center',justifyContent: 'center' }} >
              <Title style={{ color: "#FFF", paddingLeft:20 }}>추천 맛집 경로 설정</Title>
            </ImageBackground>
          </View>



          <View style={{height: 200}} >
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{flex:1}}
              initialRegion={{
                latitude: 37.566535,
                longitude: 126.977969,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              >
            <MapView.Marker 
                coordinate={{ latitude: 37.566535, longitude: 126.977969, }} 
                title={'출발'}
                description={'출발지'}
              />
              <MapView.Marker 
                coordinate={{ latitude: 37.576535, longitude: 126.987969, }} 
                title={'도착'}
                description={'도착지'}
              />        
            </MapView>          
          </View>
    


          <Button big block style={{marginTop:40 ,margin:20, backgroundColor: "#dc4239",paddingLeft:10}}>
              <Text>음식 경로 확정</Text>
          </Button>

        </Content>

        <Footer  >
          <FooterTab  >
            <Button active full onPress={() => this.props.navigation.navigate("Home")}>
            <Image source = {require("../../../assets/footer1.png")}
              style={{ width: 120, height: 55 }}/>
            </Button>
            <Button active full>
            <Image source = {require("../../../assets/footer2.png")}
              style={{ width: 120, height: 55 }}/>
            </Button>
            <Button active full>
            <Image source = {require("../../../assets/footer3.png")}
              style={{ width: 120, height: 55 }}/>
            </Button>                                    
          </FooterTab>
        </Footer>       
      </Container>
    );
  }
}

export default ResultPath;
