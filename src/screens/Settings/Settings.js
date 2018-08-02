import React, { Component } from "react";
import { Text, View, StatusBar, Image } from "react-native";

import AppFooter from "../../components/AppFooter/AppFooter";
import AppHeader from "../../components/AppHeader/AppHeader";

import {
  Container,
  Icon,
  Content,
  List,
  ListItem,
  Thumbnail,
  Body,
  Left,
  Right
} from "native-base";

export default class Settings extends Component {
  static navigationOptions = {
    drawerLabel: "Settings",
    drawerIcon: ({ tintColor }) => <Icon name="settings" />
  };
  render() {
    return (
      <Container>
        <AppHeader title="Settings" navigation={this.props.navigation} />
        <Content>
          <Body
            style={
              {
                // flex: 1,
                // flexDirection: "column",
                // justifyContent: "center"
              }
            }
          >
            <Thumbnail
              round
              large
              source={{ uri: "https://placeimg.com/200/200/animals" }}
            />
          </Body>
          <List>
            <ListItem itemHeader first>
              <Text>General</Text>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="logo-euro" />
              </Left>
              <Body>
                <Text>Company Profile</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="md-people" />
              </Left>
              <Body>
                <Text>Manage Team</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="logo-euro" />
              </Left>
              <Body>
                <Text>Manage Alerts</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="md-notifications" />
              </Left>
              <Body>
                <Text>Manage Notifications</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="md-person" />
              </Left>
              <Body>
                <Text>Social Accounts</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem itemHeader first>
              <Body>
                <Text>Help & Service</Text>
              </Body>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="md-videocam" />
              </Left>
              <Body>
                <Text>Help Videos</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="md-help-circle" />
              </Left>
              <Body>
                <Text>FAQ Section</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="md-chatboxes" />
              </Left>
              <Body>
                <Text>Support</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="md-paper-plane" />
              </Left>
              <Body>
                <Text>WPX Hosting</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="md-quote" />
              </Left>
              <Body>
                <Text>Feedback</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
        <AppFooter navigation={this.props.navigation} />
      </Container>
    );
  }
}

const style = {
  contentStyle: {
    flex: 1,
    justifyContent: "center"
  }
};
