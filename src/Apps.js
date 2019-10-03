import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import Header from "./screens/Header/";
import Header1 from "./screens/Header/1";
import Header2 from "./screens/Header/2";
import Header3 from "./screens/Header/3";
import Header4 from "./screens/Header/4";
import Header5 from "./screens/Header/5";
import Header6 from "./screens/Header/6";
import Header7 from "./screens/Header/7";
import Header8 from "./screens/Header/8";
import HeaderSpan from "./screens/Header/header-span";
import HeaderNoShadow from "./screens/Header/header-no-shadow";
import HeaderTransparent from "./screens/Header/header-transparent";
import HeaderNoLeft from "./screens/Header/header-noLeft";
import SimpleDeck from "./screens/deckswiper/simple";
import AdvancedDeck from "./screens/deckswiper/advanced";
import SelectFood from "./screens/home/selectFood";


import Home from "./screens/home/";
import Anatomy from "./screens/anatomy/";
import SideBar from "./screens/sidebar";
import NHDeckSwiper from "./screens/deckswiper/";
import Flat from "./screens/flatlist-sample";


const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Anatomy: { screen: Anatomy },
    Header: { screen: Header },
    NHDeckSwiper: { screen: NHDeckSwiper },       
    Flat: { screen: Flat },
    SelectFood: { screen: SelectFood },
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

    Header1: { screen: Header1 },
    Header2: { screen: Header2 },
    Header3: { screen: Header3 },
    Header4: { screen: Header4 },
    Header5: { screen: Header5 },
    Header6: { screen: Header6 },
    Header7: { screen: Header7 },
    Header8: { screen: Header8 },
    HeaderSpan: { screen: HeaderSpan },
    HeaderNoShadow: { screen: HeaderNoShadow },
    HeaderNoLeft: { screen: HeaderNoLeft },
    HeaderTransparent: { screen: HeaderTransparent },
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
