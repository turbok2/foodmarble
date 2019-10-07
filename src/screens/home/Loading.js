//@flow
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  ImageBackground, 
  Image,
  View,
  Text,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    setTimeout(()=>{
      this.props.navigation.navigate('Home')
    }, 1500)
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Loading...</Text> */}
        <Image source = {require("../../../assets/loading-bg.png")} style={{ flex: 1, width: '100%'}} resizeMode="stretch" />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
});
