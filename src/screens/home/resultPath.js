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

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // 지도 라이브러리
import ListThumbnailFood from  "../../Components/ListThumbnailFood"

import styles from "./styles";
const pick1 = require("../../../assets/pick_food1.png");
const pick2 = require("../../../assets/pick_food2.png");
const pick3 = require("../../../assets/pick_food3.png");
const footerBg = require("../../../assets/footer-bg.png");
const marker_icon_1 = require("../../../assets/marker_icon_1.png");
const marker_icon_2 = require("../../../assets/marker_icon_2.png");
const marker_icon_3 = require("../../../assets/marker_icon_3.png");
const marker_icon = require("../../../assets/marker_icon.png");


const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

class ResultPath extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "home",
      selected_id : "",
      selected1 : 0,
      selected2 : 0,
      selected3 : 0,
      pick1 : 0,
      pick2 : 0,
      pick3 : 0,
      num : 1,
      stores: [
        {lat: 37.9461346, lng: 127.77824129999999, title:'1', description:'gold', icon:marker_icon_1},
        {lat: 37.93294340000001, lng: 127.79188309999995, title:'2', description:'sliver', icon:marker_icon_2},
        {lat: 37.9295615, lng: 127.78120779999995, title:'3', description:'bronze', icon:marker_icon_3},
        {lat: 37.8816598, lng: 127.74964069999999, title:'4', description:'good', icon:marker_icon},
        {lat: 37.9378277, lng: 127.77708080000002, title:'4', description:'good', icon:marker_icon}
      ],
      region: {
        latitude: 37.9138972,
        longitude: 127.7707618999999,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    }
  }  
  goThumbnail = (data) => {
    // alert('selected_id: '+data.selected_id) 
    this.setState({
      selected_id : data.selected_id,
    })    
    let num_select = data.selected_id.split('_')
    switch (Number(num_select[0])) {
      case 1 : 
        this.setState({
          selected1 : 5,
          pick1 : Number(num_select[1])
        })
        break;
      case 2 : 
        this.setState({
          selected2 : 5,
          pick2 : Number(num_select[1])
        })
        break;
      case 3 : 
        this.setState({
          selected3 : 5,
          pick3 : Number(num_select[1])
        })
        break;            
    }
    
    // this.forceUpdate();
  }
  onPress_pick = (kind) => {
    // alert(kind)
    this.setState({
      num : kind
    })
    switch (kind) {
      case 1 :
        this.setState({
          stores: [
            {lat: 37.9461346, lng: 127.77824129999999, title:'1', description:'gold', icon:marker_icon_1},
            {lat: 37.93294340000001, lng: 127.79188309999995, title:'2', description:'sliver', icon:marker_icon_2},
            {lat: 37.9295615, lng: 127.78120779999995, title:'3', description:'bronze', icon:marker_icon_3},
            {lat: 37.8816598, lng: 127.74964069999999, title:'4', description:'good', icon:marker_icon},
            {lat: 37.9378277, lng: 127.77708080000002, title:'5', description:'good', icon:marker_icon}
          ],
          region: {
            latitude: 37.9138972,
            longitude: 127.7707618999999,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        })  
        break;      
      case 2 :
        this.setState({
          stores: [
            {lat: 37.8914143, lng: 127.7764909, title:'1', description:'gold', icon:marker_icon_1},
            {lat: 37.8843694, lng: 127.77804579999997, title:'2', description:'sliver', icon:marker_icon_2},
            {lat: 37.93280939999999, lng: 127.79408360000002, title:'3', description:'bronze', icon:marker_icon_3},
            {lat: 37.85558699999999, lng: 127.75785189999999, title:'4', description:'good', icon:marker_icon},
            {lat: 37.89295930000001, lng: 127.77684780000004, title:'5', description:'good', icon:marker_icon}
          ],
          region: {
            latitude: 37.894119818888888,
            longitude: 127.77596775,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        })  
        break;          
      case 3 :
        this.setState({
          stores: [
            {lat: 37.8629041, lng: 127.72346670000002, title:'1', description:'gold', icon:marker_icon_1},
            {lat: 37.9330983, lng: 127.79336839999996, title:'2', description:'sliver', icon:marker_icon_2},
            {lat: 37.8696168, lng: 127.70635820000007, title:'3', description:'bronze', icon:marker_icon_3},
            {lat: 37.9294243, lng: 127.78302480000002, title:'4', description:'good', icon:marker_icon},
            {lat: 37.8633215, lng: 127.7235412, title:'5', description:'good', icon:marker_icon}
          ],
          region: {
            latitude: 37.8980012,
            longitude: 127.75841755,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        })  
        break;        
    }
  }
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <MapView.Marker 
        key={index} 
        id={index} 
        coordinate={{
          latitude: store.lat,
          longitude: store.lng
        }}
        icon={store.icon}
        title={store.title}
        description={store.description}
        // onClick={() => alert("You clicked "+index)} 
        />
    })
  }

  render() {
    const { navigation } = this.props;
    const city = navigation.getParam('city', 'none');
    const s_food_1 = navigation.getParam('s_food_1', 'none');
    const s_food_2 = navigation.getParam('s_food_2', 'none');
    const s_food_3 = navigation.getParam('s_food_3', 'none');

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
              region={this.state.region}
              >
                {this.displayMarkers()}  
            </MapView>          
          </View>

          <View style={{flexDirection:"row"}}>
            <View style={{alignItems:'center', justifyContent:'center', marginLeft:10}}>
              <Image source = {require("../../../assets/filter-icon.png")}
                style={{ width: 20, height: 20 }}/>
            </View>
            <Button transparent dark><Text>평점순</Text></Button>
            <Button transparent dark><Text>거리순</Text></Button>
            <Button transparent dark><Text>주차장유무</Text></Button>
            <Button transparent dark><Text>가성비</Text></Button>
          </View>
          <ListThumbnailFood 
                style={{marginTop: 10}}
                // data={this.state.selected_id}
                onPress ={this.goThumbnail}
                num = {this.state.num}
          />
          <View style={{marginTop:20 ,flexDirection:"row", justifyContent:'space-around' }}>
            <View style={{flexDirection:'row'}}>
              <Image source = {require("../../../assets/pass.png")}
                  style={{ resizeMode: 'contain', width: 25, height: 25 }}/>
              <H3 style={{paddingLeft:20}}>음식여행 경로</H3>
            </View>
            <View style={{flexDirection:'row'}}>
              <H3>total </H3><H3>3</H3>
            </View>
          </View>            
          <View style={{marginTop:20 ,flexDirection:"row", justifyContent:'space-around'}}>
          <TouchableOpacity onPress={this.onPress_pick.bind(this,1)} >
            <Thumbnail large source={pick1} style={{borderColor:'red', borderWidth:this.state.selected1}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPress_pick.bind(this,2)} >
            <Thumbnail large source={pick2} style={{borderColor:'red', borderWidth:this.state.selected2}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPress_pick.bind(this,3)} >
            <Thumbnail large source={pick3} style={{borderColor:'red', borderWidth:this.state.selected3}}/>
          </TouchableOpacity>

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
