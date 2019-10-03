import React, { Component } from "react";
import {StyleSheet, View, Image} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  ImageBackground,
  Text
} from "native-base";
import styles from "./styles";

const foodmarbleLogo = require("../../../assets/foodmarble-logo.png");

class Header8 extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: "#ffffff" }}
          androidStatusBarColor="#ffffff"
          iosBarStyle="light-content"
        >
          <Left  style={{ flex:1, backgroundColor: "#ffffff" }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: "#000000" }} />
            </Button>
          </Left>
          <Body style={{ flex:3,alignItems:'center'}}>
            {/* <Title style={{ color: "#000000" }}>Custom Header</Title> */}
            <Image source = {require("../../../assets/foodmarble-logo.png")} style={{ width: 50, height: 50 }}/>
          </Body>
          <Right  >
          </Right>
        </Header>

        <Content padder>
          <Text>Header with Custom background color</Text>
            <Image source = {require("../../../assets/foodmarble-logo.png")} />          
        </Content>
      </Container>
    );
  }
}

export default Header8;
