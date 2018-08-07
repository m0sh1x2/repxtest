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

import LottieView from "lottie-react-native";

export default class Login extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
    loginFadeAnim: new Animated.Value(0),
    logoClickCounter: 1
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        Easing: Easing.back(),
        duration: 3000, // Make it take a while
        useNativeDriver: true
      }
    ).start(); // Starts the animation
    Animated.timing(
      // Animate over time
      this.state.loginFadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 500, // Make it take a while
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
      alert("That's enough!");
    }
  };
  render() {
    return (
      <Container>
        <Content style={style.content}>
          <ImageBackground
            style={style.background}
            source={require("../../../assets/bg.webp")}
          >
            <Form style={style.form}>
              <TouchableOpacity onPress={this.logoPressHandler}>
                <Animated.View
                  style={{
                    opacity: this.state.fadeAnim
                  }}
                >
                  <Image
                    style={style.logo}
                    source={require("../../../assets/logo.png")}
                  />
                </Animated.View>
              </TouchableOpacity>
              <Item floatingLabel>
                <Label style={style.textColor}>Username</Label>
                <Input style={style.textColor} value="joey@repmanager.pro" />
              </Item>
              <Item floatingLabel last>
                <Label style={style.textColor}>Password</Label>
                <Input
                  style={style.textColor}
                  secureTextEntry={true}
                  value="s0m1passw0rd"
                />
              </Item>
              <Animated.View
                style={{
                  transform: [
                    {
                      scale: this.state.loginFadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [2, 1]
                      })
                    }
                  ]
                }}
              >
                <Button
                  onPress={() => {
                    this.props.navigation.navigate("Home");
                  }}
                  style={style.buttonLogin}
                  block
                  transparent
                >
                  <Text style={style.buttonText}>Login</Text>
                </Button>
              </Animated.View>

              <Text style={style.textForgotPass}>Forgot your password?</Text>
            </Form>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

const style = {
  textColor: {
    color: "white"
  },
  textForgotPass: {
    marginTop: 15,
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
    padding: 30,
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
