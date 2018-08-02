import React, { Component } from "react";
import { Text, View } from "react-native";
import { Footer, FooterTab, Badge, Icon, Button } from "native-base";

AppFooter = props => {
  return (
    <Footer>
      <FooterTab style={style.footer}>
        <Button
          onPress={() => {
            props.navigation.navigate("Home");
          }}
          badge
          vertical
        >
          <Badge success>
            <Text>8</Text>
          </Badge>
          <Icon name="ios-cube" />
          <Text>Feed</Text>
        </Button>
        <Button
          onPress={() => {
            props.navigation.navigate("Reports");
          }}
        >
          <Icon name="ios-grid" />
          <Text>Reports</Text>
        </Button>
        <Button
          onPress={() => {
            props.navigation.navigate("Settings");
          }}
        >
          <Icon name="ios-settings" />
          <Text>Settings</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default AppFooter;

const style = {
  footer: {
    backgroundColor: "white"
  },
  active: {
    backgroundColor: "lightgrey"
  }
};
