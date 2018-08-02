import React, { Component } from "react";
import { Text, View, StatusBar, Image, TouchableOpacity } from "react-native";

import AppFooter from "../../components/AppFooter/AppFooter";
import AppHeader from "../../components/AppHeader/AppHeader";

import {
  Container,
  Icon,
  Button,
  Left,
  Right,
  Body,
  Header,
  Content,
  Title,
  List,
  ListItem,
  Thumbnail,
  Card,
  CardItem,
  Footer,
  FooterTab,
  Badge
} from "native-base";

import { Permissions, Notifications } from "expo";

const theItems = [
  {
    image: "https://facebook.github.io/react-native/img/favicon.png",
    title: "Some Title",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  }
];

//Generate dummy items
generateDummyItems = () => {
  let items = [];
  for (let i = 0; i <= 25; i++) {
    items.push({
      image: "https://placeimg.com/100/100/animals/grayscale",
      title: "New mention",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    });
  }

  return items;
};

export default class Home extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => {
      return (
        <View>
          <Icon name="home" />
        </View>
      );
    }
  };
  state = {
    items: generateDummyItems().map((item, id) => {
      return (
        <Card id={id} style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"
                }}
              />
              <Body>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Twitter Notification
                </Text>
                <Text note style={{ color: "blue" }}>
                  April 15, 2019
                </Text>
              </Body>
            </Left>
            <Right>
              <Text note>View</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Lorem Ipsum is simply dummy text of the{" "}
                <Text style={{ backgroundColor: "yellow" }}>WPX</Text> printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
                <Text style={{ backgroundColor: "yellow" }}>Hosting</Text> when
                an unknown printer took a galley of type and scrambled it to
                make a type specimen book.
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: "#87838B" }}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      );
    })
  };
  render() {
    return (
      <Container>
        <AppHeader title="Home" navigation={this.props.navigation} />
        <Content>
          <List
            dataArray={this.state.items}
            renderRow={item => {
              return item;
            }}
          />
        </Content>
        <AppFooter navigation={this.props.navigation} />
      </Container>
    );
  }
}

const style = {
  footer: {
    backgroundColor: "white"
  },
  active: {
    backgroundColor: "lightgrey"
  }
};
