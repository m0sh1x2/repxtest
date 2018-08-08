import React, { Component } from "react";
import { ImageBackground, Dimensions, Text, Image } from "react-native";

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button
} from "native-base";

export default class ResetPassword extends Component {
  render() {
    return (
      <Container style={style.container}>
        <Content>
          <ImageBackground
            style={style.background}
            source={require("../../../assets/bg.webp")}
          >
            <Form style={style.form}>
              <Image
                style={style.logo}
                source={require("../../../assets/logo.png")}
              />
              <Item floatingLabel>
                <Label style={style.textColor}>Email</Label>
                <Input style={style.textColor} value="youremail@domain.com" />
              </Item>
              <Button
                onPress={() => {
                  this.props.navigation.navigate("Login");
                }}
                style={style.buttonReset}
                block
                transparent
              >
                <Text style={style.buttonText}>Reset</Text>
              </Button>
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
  form: {
    // padding: 30,
    // backgroundColor: "rgba(226, 226, 226, 0.6)",
    borderRadius: 10,
    marginTop: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width - 50
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
  background: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },
  buttonReset: {
    marginTop: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white"
    // backgroundColor: "white"
  },
  buttonText: {
    color: "white"
  }
};
