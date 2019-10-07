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

import {toursite } from  "../screens/home/data"

export default class ListThumbnailSite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false,
      sites : []
    }
  }   

  componentDidMount() {
    // console.warn(this.props.c_lat, this.props.c_lng)
    this.fetchSites().then(items => {
        // let myItem = items.response.body.items.item[0]
        let myItem = items.response.body.items.item
        // console.log(myItem)
        this.setState({
            sites: myItem
        })
        // console.warn(this.state.sites)
        // console.log(this.state.sites)
    });
  }
  fetchSites() {
    return fetch(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?ServiceKey=1GhT92%2BaYYjLv%2BMguo4mU6H6vZnZ%2BBzWF138H58TkENhXLpv0KYEBQtLbHdpLYcCN7QHgGIcrYmTE3Y1L85diw%3D%3D&contentTypeId=12&mapX=`+this.props.c_lng+`&mapY=`+this.props.c_lat+`&_type=json&radius=10000&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=6&pageNo=1`)
        .then(response => response.json())
        .catch(error => {
            console.error(error);
        });
} 
  // fetchSites() {
  //     return fetch(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?ServiceKey=1GhT92%2BaYYjLv%2BMguo4mU6H6vZnZ%2BBzWF138H58TkENhXLpv0KYEBQtLbHdpLYcCN7QHgGIcrYmTE3Y1L85diw%3D%3D&contentTypeId=12&mapX=`+`127.7707618999999`+`&mapY=`+`37.9138972`+`&_type=json&radius=10000&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=6&pageNo=1`)
  //         .then(response => response.json())
  //         .catch(error => {
  //             console.error(error);
  //         });
  // } 

  render() {
    return (
      <View>
        <List 
          horizontal={false}
          dataArray={this.state.sites}
          // dataArray={toursite}

          renderRow={data =>
            <ListItem style={{ marginLeft:5}}
              avatar
              onPress={this.props.onPress.bind(this,data)}
            >
              <Body style={{ marginLeft:5}}>
               <View style={{flexDirection:"row", marginLeft:0}}>
                  <View style={{flex:2}}>
                    {/* <Thumbnail small source={data.firstimage}  />                   */}
                    <Thumbnail square small source={{uri: data.firstimage}}  />                  
                  </View>
                  <View style={{flexDirection:"column", flex:15, alignItems:"flex-start", marginLeft: 3}}>
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                      <View style={{flex:7}} ><Text>{data.title}</Text></View>
                    </View>
                    
                    <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                      <Text note> {data.addr1} </Text>
                      <Text note style={{fontWeight:"bold"}}> {data.tel} </Text>
                    </View>                
                  </View> 
                </View>
              </Body>
            </ListItem>}
        />
      </View>          
    );  
  }
}
