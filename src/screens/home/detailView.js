import React, { Component } from "react";
import {  ImageBackground, View, Image, TouchableOpacity } from "react-native";
import { Container, 
  Button, 
  H1, 
  H2,
  H3, 
  H4,
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

import {bestfood1, bestfood2, bestfood3, store1, store2, store3, region1, region2, region3 } from  "../home/data"
import styles from "./styles";


class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }  

  render() {
    // const { navigation } = this.props;
    // const city = navigation.getParam('city', 'nowhere');
    // const data = navigation.getParam('data', 'none');
    // console.warn('전달된 값: '+city+' '+data)
    // console.warn('전달된 값: '+data)
    
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: "#ffffff" }}
          androidStatusBarColor="#ffffff"
          iosBarStyle="light-content"
        >
          <Left  style={{ flex:1, backgroundColor: "#ffffff" }}>
            <Button transparent onPress={() => this.props.navigation.navigate("FinalPath")}>
              <Image source = {require("../../../assets/back-icon.png")}
              style={{ width: 25, height: 25 }}/>
            </Button>            
          </Left>
          <Body style={{ flex:3,alignItems:'center'}}>
            <Image source = {require("../../../assets/foodmarble-logo.png")} style={{ width: 50, height: 50 }}/>
          </Body>
          <Right  style={{ flex:1, backgroundColor: "#ffffff" }} >
            {/* <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Image source = {require("../../../assets/menu-icon.png")}
              style={{ width: 30, height: 30 }}/>
            </Button>           */}
          </Right>
        </Header> 

        <Content  >  


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

export default DetailView;
