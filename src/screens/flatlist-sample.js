// import React, { Component } from 'react';
// import {
//   // FlatList,
//   // ScrollView,
//   Text,
//   View
// } from 'react-native';
// import { List, ListItem } from 'native-base'

// //import { randomUsers } from './util';

// class Flat extends Component {


//   render() {
//     return (
//       <View>
//         <Text>hhhhhhhh</Text>
//       </View>
//     );
//   }
// }

// export default Flat;


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

import { randomUsers } from './util';

const city1 = require("../../assets/춘천.jpg");
const city2 = require("../../assets/강릉.jpg");
const city3 = require("../../assets/속초.jpg");
const city4 = require("../../assets/고성.jpg");

const citys = [
  {
    img: city1,
    text: "춘천",
    note: "강원도,대한민국"
  },
  {
    img: city2,
    text: "강릉",
    note: "강원도,대한민국"
  },
  {
    img: city3,
    text: "속초",
    note: "강원도,대한민국"
  },
  {
    img: city4,
    text: "고성",
    note: "강원도,대한민국"
  }
];

class Flat extends Component {
  state = {
    citys,
    // selected: "Simon Mignolet"
  };

  // state = {
  //   refreshing: false,
  //   data: randomUsers(20),
  // };

  // onEndReached = () => {
  //   this.setState(state => ({
  //     data: [
  //       ...state.data,
  //       ...randomUsers(),
  //     ]
  //   }));
  // };

  // onRefresh = () => {
  //   this.setState({
  //     data: randomUsers(20),
  //   });
  // }
    render() {
      return (
        <View>
          <List
            horizontal={true}
            dataArray={citys}
            renderRow={data =>
              <ListItem avatar>
                <Body>
                  <Thumbnail large source={data.img} />
                  <View style={{alignItems:"center"}}>
                    <Text>
                      {data.text}
                    </Text>
                    <Text numberOfLines={1} note>
                      {data.note}
                    </Text>
                  </View>
                </Body>
              </ListItem>}
          />
        </View>          
      );
    }
  // render() {
  //   return (
  //     <List>
  //       <FlatList
  //         data={this.state.data}
  //         initialNumToRender={20}
  //         onEndReachedThreshold={1}
  //         onEndReached={this.onEndReached}
  //         refreshing={this.state.refreshing}
  //         onRefresh={this.onRefresh}
  //         renderItem={({ item }) => {
  //           return (
  //             // <ListItem
  //             //   roundAvatar
  //             //   avatar={{uri: item.avatar}}
  //             //   title={item.name}
  //             // />
  //             <View>
  //               <Text>{item.name}</Text>
  //             </View>
  //           );
  //         }}
  //       />
  //     </List>
  //   );
  // }
}

export default Flat;