import React, { Component } from "react";
import { View, Text, PanResponder, Animated } from "react-native";

export default class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1)
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderGrant: (e, gesture) => {
          // console.warn('onPanResponderGrant')
          this.state.pan.setOffset({
            x: this._val.x,
            y:this._val.y
          })
          this.state.pan.setValue({ x:0, y:0})
        },
        onPanResponderMove: Animated.event([ 
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ]),
        onPanResponderRelease: (e, gesture) => {
          // console.warn('onPanResponderRelease :'+this.props.d_value)

          if (this.isDropArea(gesture)) {
            // alert('selected....: '+this.props.d_value)
            Animated.timing(this.state.opacity, {
              toValue: 0,
              duration: 1000
            }).start(() =>
              this.setState({
                showDraggable: false
              })
            );
            this.props.onPress(this.props.d_value)
          } else {
            Animated.spring(this.state.pan, {
              toValue: { x: 0, y: 0 },
              friction: 5
            }).start();
          }
        }
      });
  }

  isDropArea(gesture) {
    return gesture.moveY > 400 && gesture.moveY < 650;
  }

  render() {
    return (
      <View style={{ width: "20%", alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable) {
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, {
                backgroundColor: "#7ed321",
                width: 20 * 2,
                height: 20 * 2,
                borderRadius: 20,
                opacity:this.state.opacity
                }]}
          >
            {this.props.children}
            {/* <Text>jjjj</Text> */}
          </Animated.View>
        </View>
      );
    }
  }
}
