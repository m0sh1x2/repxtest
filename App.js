import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView
} from "react-native";

import { createDrawerNavigator, DrawerItems } from "react-navigation";

import {
  Container,
  Icon,
  Button,
  Left,
  Body,
  Header,
  Footer,
  FooterTab,
  Content
} from "native-base";

import { Font, AppLoading } from "expo";

import Home from "./src/screens/Home/Home";
import Reports from "./src/screens/Reports/Reports";
import Settings from "./src/screens/Settings/Settings";
import CustomNavigation from "./src/screens/CustomNavigation/CustomNavigation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  //Fix font loading issues
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }

    return (
      <Container style={{ marginTop: 24 }}>
        <StatusBar hidden={false} />
        <RootStack />
      </Container>
    );
  }
}

const RootStack = createDrawerNavigator(
  {
    Home: Home,
    Reports: Reports,
    Settings: Settings
  },
  {
    initialRouteName: "Home",
    // drawerWidth: 320,
    contentComponent: CustomNavigation
  }
);

export default App;
