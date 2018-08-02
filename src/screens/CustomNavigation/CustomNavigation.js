import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

import {
  Container,
  Thumbnail,
  Header,
  Body,
  Button,
  Content,
  Icon,
  ListItem,
  Right,
  Left,
  Switch,
  Badge,
  Accordion
} from "native-base";
import { DrawerItems } from "react-navigation";

CustomNavigation = props => {
  const dataArray = [
    { title: "View Your Alerts", content: ["Lorem ipsum dolor sit amet"] }
  ];
  const sideMenuArray = [
    { title: "View Your Alerts", icon: "ios-notifications", badge: 8 },
    { title: "Add New Alert", icon: "ios-add-circle" },
    { title: "Ignore List", icon: "ios-remove-circle" },
    { title: "Find & Influencers", icon: "md-people" },
    { title: "Reverse Ranking", icon: "md-stats" },
    { title: "Create Report", icon: "md-copy" },
    { title: "Integrations", icon: "md-git-network" }
  ];
  sideMenuItems = sideMenuArray.map((item, id) => {
    return (
      <ListItem key={id} icon>
        <Left>
          <Button style={style.sideMenu}>
            <Icon active name={item.icon} />
          </Button>
        </Left>
        <Body>
          <TouchableOpacity>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        </Body>
        <Right>
          {item.badge ? (
            <Badge info>
              <Text>{item.badge}</Text>
            </Badge>
          ) : null}
        </Right>
      </ListItem>
    );
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          // height: 150,
          alignItems: "flex-start",
          justifyContent: "flex-start",
          margin: 10
          // backgroundColor: "red"
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{ height: 40, width: 150, marginLeft: 15 }}
        />
      </View>

      <Content>
        <ListItem icon>
          <Body>
            <TouchableOpacity>
              <Text>Main Menu</Text>
            </TouchableOpacity>
          </Body>
        </ListItem>

        {sideMenuItems}
      </Content>
      {/* <ScrollView>
        <DrawerItems {...props} />
        
      </ScrollView> */}
    </SafeAreaView>
  );
};

const style = {
  sideMenu: {
    backgroundColor: "grey"
  },
  accordion: {
    backgroundColor: "white"
  },
  badge: {
    color: "white"
  }
};
export default CustomNavigation;
