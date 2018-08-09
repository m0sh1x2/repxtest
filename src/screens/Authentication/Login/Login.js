import React, { Component } from "react";
import {
  Text,
  Dimensions,
  Image,
  ImageBackground,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button
} from "native-base";

import { Constants, Notifications } from "expo";

export default class Login extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
    loginFadeAnim: new Animated.Value(0),
    logoClickCounter: 1,
    x: new Animated.Value(-100),
    inputName: "joey@repmanager.pro",
    inputPassword: "somepass"
  };

  // Experimental local push notifications, remove and set in a normal component
  localNotificationHandler = () => {
    console.log("local notificaiton called");
    const localnotification = {
      title: "New Mention for WPX",
      body: "Just a dummy local notification!",
      android: {
        sound: true
      },
      ios: {
        sound: true
      }
    };
    let sendAfterFiveSeconds = Date.now();
    sendAfterFiveSeconds += 5000;

    const schedulingOptions = { time: sendAfterFiveSeconds };
    Notifications.scheduleLocalNotificationAsync(
      localnotification,
      schedulingOptions
    );
  };

  componentDidMount() {
    // Set the animations once the component has fully loaded
    Animated.spring(this.state.x, {
      toValue: 0,
      duration: 3000
    }).start();
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        Easing: Easing.back(),
        duration: 2000, // Make it take a while
        useNativeDriver: true
      }
    ).start(); // Starts the animation
    Animated.timing(
      // Animate over time
      this.state.loginFadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 1000, // Make it take a while
        useNativeDriver: true
      }
    ).start(); // Starts the animation
  }

  static navigationOptions = {
    drawerLabel: "Login"
  };

  logoPressHandler = () => {
    this.setState({
      logoClickCounter: this.state.logoClickCounter + 1
    });
    if (this.state.logoClickCounter % 10 === 0) {
      this.setState({
        logoClickCounter: 0
      });
      alert("That's enough!");
    }
  };
  render() {
    return (
      <Container style={style.container}>
        <Content style={style.content}>
          <ImageBackground
            style={style.background}
            source={require("../../../assets/bg.webp")}
          >
            <Form style={style.form}>
              <TouchableOpacity onPress={this.logoPressHandler}>
                <Animated.View
                  style={{
                    opacity: this.state.fadeAnim,
                    transform: [
                      {
                        translateY: this.state.loginFadeAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-500, 0]
                        })
                      }
                    ]
                  }}
                >
                  <Image
                    style={style.logo}
                    source={require("../../../assets/logo.png")}
                  />
                </Animated.View>
              </TouchableOpacity>
              <Animated.View
                style={{
                  transform: [
                    {
                      translateX: this.state.loginFadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-200, 0]
                      })
                    }
                  ]
                }}
              >
                <Item floatingLabel>
                  <Label style={style.textColor}>Username</Label>
                  <Input style={style.textColor} value={this.state.inputName} />
                </Item>
              </Animated.View>

              <Animated.View
                style={{
                  transform: [
                    {
                      translateX: this.state.loginFadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [200, 0]
                      })
                    }
                  ]
                }}
              >
                <Item floatingLabel last>
                  <Label style={style.textColor}>Password</Label>
                  <Input
                    style={style.textColor}
                    secureTextEntry={true}
                    value={this.state.inputPassword}
                  />
                </Item>
              </Animated.View>
              <Animated.View
                style={{
                  transform: [
                    {
                      translateX: this.state.loginFadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-200, 0]
                      })
                    }
                  ]
                }}
              >
                <Button
                  onPress={() => {
                    // this.localNotificationHandler();
                    this.props.navigation.navigate("Home");
                  }}
                  style={style.buttonLogin}
                  block
                  transparent
                >
                  <Text style={style.buttonText}>Login</Text>
                </Button>
              </Animated.View>
              <Animated.View
                style={{
                  transform: [
                    {
                      translateY: this.state.loginFadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [200, 0]
                      })
                    }
                  ]
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("ResetPassword");
                  }}
                >
                  <Text style={style.textForgotPass}>
                    Forgot your password?
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </Form>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

const style = {
  container: {
    backgroundColor: "black"
  },
  textColor: {
    color: "white"
  },
  textForgotPass: {
    padding: 15,
    paddingBottom: 30,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto"
  },
  logo: {
    width: 200,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    tintColor: "white",
    marginBottom: 30
    // backgroundColor: "black"
  },
  content: {},
  background: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },
  form: {
    // padding: 30,
    // backgroundColor: "rgba(226, 226, 226, 0.6)",
    borderRadius: 10,
    marginTop: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width - 50
  },
  buttonText: {
    color: "white"
  },
  buttonLogin: {
    marginTop: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white"
    // backgroundColor: "white"
  }
};
