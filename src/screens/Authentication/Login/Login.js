import React, { Component } from "react";
import { Text, Dimensions, Image, ImageBackground } from "react-native";

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button
} from "native-base";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content style={style.content}>
          <ImageBackground
            style={style.background}
            source={require("../../../assets/test_bg.jpg")}
          >
            <Form style={style.form}>
              <Image
                style={style.logo}
                source={require("../../../assets/logo.png")}
              />
              <Item floatingLabel>
                <Label style={style.textColor}>Username</Label>
                <Input style={style.textColor} />
              </Item>
              <Item floatingLabel last>
                <Label style={style.textColor}>Password</Label>
                <Input style={style.textColor} secureTextEntry={true} />
              </Item>
              <Button style={style.buttonLogin} block transparent>
                <Text style={style.buttonText}>Login</Text>
              </Button>
              <Text style={style.textColor}>Forgot your password?</Text>
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
  logo: {
    width: 200,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto"
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
    // backgroundColor: "white"
  }
};
