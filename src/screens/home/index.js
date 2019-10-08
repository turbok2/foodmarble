import React, { Component } from "react";
import {  ImageBackground, View, Image } from "react-native";
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
  state = {
    search : ""
  }
  handleChange = (text) => {
    this.setState({
      search : text
    })
  }
  goSearch = (search) => {
    // alert('search: '+search)
    //춘천이 맞으면 이동
    if(search==="춘천") {
      this.props.navigation.navigate("SelectFood",{city:search})
    }
    //아니면 alert
    else {
      alert('현재 춘천 지역 정보만 제공됩니다. '+search+' 지역은 추후 제공예정입니다.')
    }
  }
  goThumbnail = (data) => {
    // alert('search: '+data.text)
    this.setState({
      search : data.text,
    })    
    this.forceUpdate();
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: "#ffffff" }}
          androidStatusBarColor="#ffffff"
          iosBarStyle="light-content"
        >
          <Left  style={{ flex:1, backgroundColor: "#ffffff" }}>
            {/* <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Image source = {require("../../../assets/menu-icon.png")}
              style={{ width: 30, height: 30 }}/>
            </Button> */}
          </Left>
          <Body style={{ flex:3,alignItems:'center'}}>
            {/* <Title style={{ color: "#000000" }}>Custom Header</Title> */}
            <Image source = {require("../../../assets/foodmarble-logo.png")} style={{ width: 50, height: 50 }}/>
          </Body>
          <Right  style={{ flex:1, backgroundColor: "#ffffff" }} >
            {/* <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Image source = {require("../../../assets/menu-icon.png")}
              style={{ width: 30, height: 30 }}/>
            </Button>           */}
          </Right>
        </Header>

        <Content >
          <ImageBackground source={launchscreenBg} style={{ width:'100%', resizeMode: 'contain'}}>
            <View style={{ marginTop: 100, alignItems : "center" }}>
              <H3 style={styles.text,{ color: "#ffffff"}}>어디로 먹으러 갈까요</H3>
            </View>
            <View style={{ marginTop: 40, alignItems : "center", justifyContent: 'center', flexDirection : 'row' }}>
              <Item regular style={{justifyContent: 'center' ,backgroundColor:"#ffffff", width:"80%"}} >
                <Icon active name='search' />
                <Input 
                  placeholder='원하는 음식여행지를 검색' 
                  style={{backgroundColor:"#ffffff"}}  
                  value = {this.state.search}
                  onChangeText = {this.handleChange}
                />

              </Item>
              <Button small block warning
                  onPress={
                  () => this.goSearch(this.state.search)
              }>
                <Text>ok</Text>
              </Button>
            </View>

            <View style={{backgroundColor:"#FFFFFF", margin : 20, flex:1, alignItems:"center"}}>
              <H3 style={{marginTop:5}}>인기 먹거리 여행지</H3>
              <Text note>요새 먹방여행은 여기!  강력추천!</Text>
              <ListThumbnailCity 
                style={{marginTop: 40}}
                data={this.state.city}
                onPress ={this.goThumbnail}
              />   
            </View>
            <CardList />   
          </ImageBackground>                    
        </Content>


        <Footer >
          <FooterTab  >
            <Button active full onPress={() => this.props.navigation.navigate("Home")}>
            <Image source = {require("../../../assets/footer1.png")}
              style={{ width: 140, height: 55 }}/>
            </Button>
            <Button active full  >
            <Image source = {require("../../../assets/footer2.png")}
              style={{ width: 140, height: 55 }}/>
            </Button>
            <Button active full  >
            <Image source = {require("../../../assets/footer3.png")}
              style={{ width: 140, height: 55 }}/>
            </Button>                        
          </FooterTab>
    
        </Footer>        
      </Container>
    );
  }
}

export default Home;
