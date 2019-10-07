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

import Draggable from  "../../Components/draggable"
import styles from "./styles";
const pick1 = require("../../../assets/pick_food1.png");
const pick2 = require("../../../assets/pick_food2.png");
const pick3 = require("../../../assets/pick_food3.png");
const pick0 = require("../../../assets/notyet.png");

const footerBg = require("../../../assets/footer-bg.png");


class SelectFood extends Component {
  constructor(props) {
    super(props);
    this.handleRelease = this.handleRelease.bind(this);
    this.state = {
      s_food_1: 0,
      s_food_1_pick : pick0,
      s_food_2: 0,
      s_food_2_pick : pick0,
      s_food_3: 0,
      s_food_3_pick : pick0,
      s_cnt : 0,
      selected1 : 0,
      selected2 : 0,
      selected3 : 0,
    };
  }
  handleRelease = (d_value) => {
    // console.warn('released_id: '+d_value)
    switch (this.state.s_cnt) {
      case 0 :
        this.setState({
          s_food_1 : d_value,
          s_cnt : this.state.s_cnt+1,
          selected1 : 5,
          s_food_1_pick : (d_value==1) ? pick1 : (d_value==2) ? pick2 : pick3
        })
        break;
      case 1 :
        this.setState({
          s_food_2 : d_value,
          s_cnt : this.state.s_cnt+1,
          selected2 : 5,
          s_food_2_pick : (d_value==1) ? pick1 : (d_value==2) ? pick2 : pick3
        })
        break;
      case 2 :
        this.setState({
          s_food_3 : d_value,
          s_cnt : this.state.s_cnt+1,
          selected3 : 5,
          s_food_3_pick : (d_value==1) ? pick1 : (d_value==2) ? pick2 : pick3
        })
        break;
    }
    // alert('released_id: ') 
    // this.setState({
    //   selected_id : data.selected_id,
    // })    
    // let num_select = data.selected_id.split('_')

    
    // this.forceUpdate();
  }
  render() {
    const { navigation } = this.props;
    const city = navigation.getParam('city', '춘천');
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: "#ffffff" }}
          androidStatusBarColor="#ffffff"
          iosBarStyle="light-content"
        >
          <Left  style={{ flex:1, backgroundColor: "#ffffff" }}>
            <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
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
        {/* scrollEnabled={false} */}
          <View>
            <ImageBackground source = {footerBg} style={{flexDirection: "row", width:'100%', height: 50, resizeMode: 'contain', alignItems:'center',justifyContent: 'center' }} >
              <Image source = {require("../../../assets/search-icon.png")}
              style={{ width: 25, height: 25 }}/>
              <Title style={{ color: "#FFF", paddingLeft:20 }}>{city}에 대한 검색 결과</Title>
            </ImageBackground>
          </View>
          <View style={{height: 300, borderColor: "#000000"}} >
            <ImageBackground source = {require("../../../assets/reasult_foods.png")}
                style={{ resizeMode: "contain", width: null, flex:1 }}>
              <View style={{flex:1, flexDirection:'row'}}>
                <View style={{flex:1}}>
                </View>
                <View style={{flex:1, justifyContent:'center'}}>
                  <Draggable 
                    d_value={2}
                    onPress={this.handleRelease}
                  >
                    <View style={{backgroundColor:'#7ed321'}}>
                      <Image source = {require("../../../assets/food1.png")} style={{borderColor: '#7ed321',borderWidth: 2}} /> 
                    </View>
                  </Draggable>              
                </View>                
              </View>    

              <View style={{flex:1}}>
              </View>    

              <View style={{flex:1, flexDirection:'row'}}>
                <View style={{flex:1}}>
                </View>
                <View style={{flex:1}}>
                </View>
                <View style={{flex:1, justifyContent:'center'}}>
                  <Draggable 
                    style={{flex:1}}  d_value={3}
                    onPress={this.handleRelease}
                    // onPanResponderRelease={this.handleRelease}
                  >
                    <View style={{backgroundColor:'#7ed321'}}>
                      <Image source = {require("../../../assets/food2.png")} style={{borderColor: '#7ed321',borderWidth: 2}}/> 
                    </View>
                  </Draggable>
                </View>                
              </View>    

              <View style={{flex:1}}>
              </View>    

              <View style={{flex:1, flexDirection:'row'}}>
                <View style={{flex:1}}>
                </View>    
                <View style={{flex:1, justifyContent:'center'}}>
                  <Draggable 
                    style={{top: '80%', left:'50%'}}  d_value={1}
                    onPress  ={this.handleRelease}
                  >
                    <View style={{backgroundColor:'#7ed321'}}>
                      <Image source = {require("../../../assets/food3.png")} style={{borderColor: '#7ed321',borderWidth: 2}}/> 
                    </View>
                  </Draggable>
                </View>    
                <View style={{flex:1}}>
                </View>                                    
              </View>                                              
            </ImageBackground>
          </View>
    

          {/* <View style={{}}>
            <View style={{height: 200, borderColor : "#00334d"}}>
              <H1>Drop them here!</H1>
            </View>
            <View style={{height:100}} />
          </View> */}


          <View style={{marginTop:20 ,flexDirection:"row", justifyContent:'space-around' }}>
            <View style={{flexDirection:'row'}}>
              <Image source = {require("../../../assets/heart.png")}
                  style={{ resizeMode: 'contain', width: 30, height: 30 }}/>
              <H3 style={{paddingLeft:20}}>먹고 싶은 음식</H3>
            </View>
            <View style={{flexDirection:'row'}}>
              <H3>total </H3><H3>3</H3>
            </View>
          </View>            
          <View style={{marginTop:20 ,flexDirection:"row", justifyContent:'space-around'}}>
            <Thumbnail large source={this.state.s_food_1_pick} style={{borderColor:'red', borderWidth:this.state.selected1}} />
            <Thumbnail large source={this.state.s_food_2_pick} style={{borderColor:'red', borderWidth:this.state.selected2}} />
            <Thumbnail large source={this.state.s_food_3_pick} style={{borderColor:'red', borderWidth:this.state.selected3}} />
          </View>


          <Button big block style={{marginTop:20 ,margin:20, backgroundColor: "#dc4239",paddingLeft:10}} onPress={() => this.props.navigation.navigate("ResultPath",{city:city, s_food_1:this.state.s_food_1,s_food_2:this.state.s_food_2,s_food_3:this.state.s_food_3})} >
              <Text>선택 음식 경로 추천</Text>
          </Button>

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

export default SelectFood;
