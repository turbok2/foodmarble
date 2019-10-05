import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import SimpleDeck from "./screens/deckswiper/simple";
import AdvancedDeck from "./screens/deckswiper/advanced";
import SelectFood from "./screens/home/selectFood";
import ResultPath from "./screens/home/resultPath";


import Home from "./screens/home/";
import SideBar from "./screens/sidebar";
import NHDeckSwiper from "./screens/deckswiper/";
import Flat from "./screens/flatlist-sample";


const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    NHDeckSwiper: { screen: NHDeckSwiper },       
    Flat: { screen: Flat },
    SelectFood: { screen: SelectFood },
    ResultPath: { screen: ResultPath }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    SimpleDeck: { screen: SimpleDeck },
    AdvancedDeck: { screen: AdvancedDeck },    

  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
