import React, { Component } from "react";
import { Text, View } from "react-native";

import {
  Icon,
  Button,
  Left,
  Right,
  Body,
  Header,
  Title,
  Picker
} from "native-base";

AppHeader = props => {
  return (
    <Header searchBar rounded style={{ backgroundColor: "white" }}>
      <Left>
        <Button
          transparent
          onPress={() => {
            props.navigation.openDrawer();
          }}
        >
          <Icon
            name="ios-menu"
            style={{ color: "black", fontWeight: "bold" }}
          />
        </Button>
      </Left>

      <Body>
        <Title style={{ color: "black", fontWeight: "bold" }}>
          {props.title}
        </Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon style={style.buttonIcon} name="search" />
        </Button>
        <Button transparent>
          <Icon style={style.buttonIcon} name="heart" />
        </Button>
        {/* <Button transparent>
          <Icon style={style.buttonIcon} name="more" />
        </Button> */}
        <Picker
          mode="dropdown"
          note={false}
          iosIcon={<Icon name="more" />}
          placeholderIconColor="#007aff"
          style={{ width: undefined }}
          selectedValue={"key0"}
        >
          <Picker.Item label="Profile" value="key0" />
          <Picker.Item label="Settings" value="key1" />
          <Picker.Item label="Support" value="key2" />
          <Picker.Item label="Help Videos" value="key3" />
          <Picker.Item label="FAQ Section" value="key4" />
          <Picker.Item label="Logout" value="key5" />
        </Picker>
      </Right>
    </Header>
  );
};

const style = {
  button: {
    backgroundColor: "white"
  },
  buttonIcon: {
    color: "black"
  }
};
export default AppHeader;
