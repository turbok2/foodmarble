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
import ListThumbnailSite from  "../../Components/ListThumbnailSite"

import {bestfood1, bestfood2, bestfood3, store1, store2, store3, region1, region2, region3 } from  "../home/data"

import styles from "./styles";

const pick1 = require("../../../assets/pick_food1.png");
const pick2 = require("../../../assets/pick_food2.png");
const pick3 = require("../../../assets/pick_food3.png");
const pick0 = require("../../../assets/notyet.png");
const footerBg = require("../../../assets/footer-bg.png");
// const marker_icon_1 = require("../../../assets/marker_icon_1.png");
// const marker_icon_2 = require("../../../assets/marker_icon_2.png");
// const marker_icon_3 = require("../../../assets/marker_icon_3.png");
// const marker_icon = require("../../../assets/marker_icon.png");


// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = 0.0421;
var bf,bs, br;

class FinalPath extends Component {
  constructor(props) {
    super(props);
    this.goDetail = this.goDetail.bind(this);
    this.state = {
      active: "home",
      selected_id : "",
      selected1 : 0,
      selected2 : 0,
      selected3 : 0,
      s_food_1_pick : pick0,
      s_food_2_pick : pick0,
      s_food_3_pick : pick0,
      pick1 : 0,
      pick2 : 0,
      pick3 : 0,
      num : 4,
      onetime_arg : 0,
      id : 1,
      bestfood : [],
      stores: [],
      region: region1
    //   stores: [
    //     {lat: 37.9461346, lng: 127.77824129999999, title:'1', description:'gold', icon:marker_icon_1},
    //     {lat: 37.93294340000001, lng: 127.79188309999995, title:'2', description:'sliver', icon:marker_icon_2},
    //     {lat: 37.9295615, lng: 127.78120779999995, title:'3', description:'bronze', icon:marker_icon_3},
    //     {lat: 37.8816598, lng: 127.74964069999999, title:'4', description:'good', icon:marker_icon},
    //     {lat: 37.9378277, lng: 127.77708080000002, title:'4', description:'good', icon:marker_icon}
    //   ],
    //   region: {
    //     latitude: 37.9138972,
    //     longitude: 127.7707618999999,
    //     latitudeDelta: LATITUDE_DELTA,
    //     longitudeDelta: LONGITUDE_DELTA,
    //   }
    }
  }  

  onPress_pick = (id, kind) => {
    // console.warn("id: "+id+" kind : "+kind)
    if (kind==0) return;
    this.setState({
      num : kind,
      id : id
    })
    switch (kind) {
      case 1 :
        this.setState({
            stores : store1,
            region : region1
        //   stores: [
        //     {lat: 37.9461346, lng: 127.77824129999999, title:'1', description:'gold', icon:marker_icon_1},
        //     {lat: 37.93294340000001, lng: 127.79188309999995, title:'2', description:'sliver', icon:marker_icon_2},
        //     {lat: 37.9295615, lng: 127.78120779999995, title:'3', description:'bronze', icon:marker_icon_3},
        //     {lat: 37.8816598, lng: 127.74964069999999, title:'4', description:'good', icon:marker_icon},
        //     {lat: 37.9378277, lng: 127.77708080000002, title:'5', description:'good', icon:marker_icon}
        //   ],
        //   region: {
        //     latitude: 37.9138972,
        //     longitude: 127.7707618999999,
        //     latitudeDelta: LATITUDE_DELTA,
        //     longitudeDelta: LONGITUDE_DELTA,
        //   }
        })  
        break;      
      case 2 :
        this.setState({
            stores : store2,
            region : region2
        //   stores: [
        //     {lat: 37.8914143, lng: 127.7764909, title:'1', description:'gold', icon:marker_icon_1},
        //     {lat: 37.8843694, lng: 127.77804579999997, title:'2', description:'sliver', icon:marker_icon_2},
        //     {lat: 37.93280939999999, lng: 127.79408360000002, title:'3', description:'bronze', icon:marker_icon_3},
        //     {lat: 37.85558699999999, lng: 127.75785189999999, title:'4', description:'good', icon:marker_icon},
        //     {lat: 37.89295930000001, lng: 127.77684780000004, title:'5', description:'good', icon:marker_icon}
        //   ],
        //   region: {
        //     latitude: 37.894119818888888,
        //     longitude: 127.77596775,
        //     latitudeDelta: LATITUDE_DELTA,
        //     longitudeDelta: LONGITUDE_DELTA,
        //   }
        })  
        break;          
      case 3 :
        this.setState({
            stores : store3,
            region : region3
        //   stores: [
        //     {lat: 37.8629041, lng: 127.72346670000002, title:'1', description:'gold', icon:marker_icon_1},
        //     {lat: 37.9330983, lng: 127.79336839999996, title:'2', description:'sliver', icon:marker_icon_2},
        //     {lat: 37.8696168, lng: 127.70635820000007, title:'3', description:'bronze', icon:marker_icon_3},
        //     {lat: 37.9294243, lng: 127.78302480000002, title:'4', description:'good', icon:marker_icon},
        //     {lat: 37.8633215, lng: 127.7235412, title:'5', description:'good', icon:marker_icon}
        //   ],
        //   region: {
        //     latitude: 37.8980012,
        //     longitude: 127.75841755,
        //     latitudeDelta: LATITUDE_DELTA,
        //     longitudeDelta: LONGITUDE_DELTA,
        //   }
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
  goDetail = (data) => {
    // this.props.navigation.navigate("DetailView")
    // this.props.navigator.push.bind(this)({
    //   component: DetailView
    // });
    // console.warn(data) 
    // this.props.navigation.navigate("DetailView",{ data:data})
    

  }
  goThumbnail2 = (data) => {
    // console.warn(data) 
    // this.forceUpdate();
  }
  changeSelectedPath = (s_food_1,s_food_2,s_food_3) => {
    if (this.state.onetime_arg==0){
      // console.warn('전달된 값: '+s_food_1+' '+s_food_2+' '+s_food_3)
      let num_select1 = s_food_1.split('_')
      let num_select2 = s_food_2.split('_')
      let num_select3 = s_food_3.split('_')
      let ff1, ff2, ff3, ss1, ss2, ss3

      if (s_food_1 != "none") {
        switch (Number(num_select1[1])) {
          case 1 : 
            ff1 = bestfood1[Number(num_select1[2])-1]
            ss1 = store1[Number(num_select1[2])-1]
            break;
          case 2 : 
            ff1 = bestfood2[Number(num_select1[2])-1]
            ss1 = store2[Number(num_select1[2])-1]         
            break;
          case 3 : 
            ff1 = bestfood3[Number(num_select1[2])-1]
            ss1 = store3[Number(num_select1[2])-1]
            break;
        }
      } 
      if (s_food_2 != "none") {
        switch (Number(num_select2[1])) {
          case 1 : 
            ff2 = bestfood1[Number(num_select2[2])-1]
            ss2 = store1[Number(num_select2[2])-1]
            break;
          case 2 : 
            ff2 = bestfood2[Number(num_select2[2])-1]
            ss2 = store2[Number(num_select2[2])-1]
            break;
          case 3 : 
            ff2 = bestfood3[Number(num_select2[2])-1]
            ss2 = store3[Number(num_select2[2])-1]
            break;
        }
      } 
      if (s_food_3 != "none") {
        switch (Number(num_select3[1])) {
          case 1 : 
            ff3 = bestfood1[Number(num_select3[2])-1]
            ss3 = store1[Number(num_select3[2])-1]
            break;
          case 2 : 
            ff3 = bestfood2[Number(num_select3[2])-1]
            ss3 = store2[Number(num_select3[2])-1]
            break;
          case 3 : 
            ff3 = bestfood3[Number(num_select3[2])-1]
            ss3 = store3[Number(num_select3[2])-1]
            break;
        }
      } 
      bf = [ff1,ff2,ff3]
      bs = [ss1,ss2,ss3]
      br = region1
      this.setState({bestfood : bf, stores : bs, region : br})
      // console.warn(bs)
      // console.warn(br)
      // console.warn('bf '+bf)
      // console.log('bf '+bf)
      // console.warn('bf[0] '+bf[0])
      // console.log('bf[0] '+bf[0])

      // console.warn(this.state.bestfood)

      this.setState({onetime_arg : 1})
    } 
  }

  render() {
    const { navigation } = this.props;
    const city = navigation.getParam('city', 'nowhere');
    const s_food_1 = navigation.getParam('s_food_1', 'none');
    const s_food_2 = navigation.getParam('s_food_2', 'none');
    const s_food_3 = navigation.getParam('s_food_3', 'none');
    // console.warn('전달된 값: '+s_food_1+' '+s_food_2+' '+s_food_3)
    this.changeSelectedPath(s_food_1,s_food_2,s_food_3)
    
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: "#ffffff" }}
          androidStatusBarColor="#ffffff"
          iosBarStyle="light-content"
        >
          <Left  style={{ flex:1, backgroundColor: "#ffffff" }}>
            <Button transparent onPress={() => this.props.navigation.navigate("ResultPath")}>
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
              <Title style={{ color: "#FFF", paddingLeft:20 }}>나의 {city} 음식여행 경로</Title>
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

          <ListThumbnailFood 
                style={{marginTop: 10}}
                // data={this.state.selected_id}
                onPress ={this.goThumbnail2}
                num =  {this.state.num}
          />



          <Button big block style={{marginTop:40 ,margin:20, backgroundColor: "#dc4239",paddingLeft:10}}>
              <Text>경로 저장 및 안내</Text>
          </Button>
          <H3 style={{paddingLeft:20, marginTop: 10}}>주변 관광 정보</H3>
          <ListThumbnailSite 
                style={{marginTop: 10}}
                onPress ={this.goDetail}
                c_lat = {(bf[0].latitude>=0)?bf[0].latitude:37.9138972}
                c_lng = {(bf[0].longitude>=0)?bf[0].longitude:127.7707618999999}                
          />

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

export  {FinalPath, bf};
