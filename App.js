import React from "react";
import { StatusBar } from "react-native";

import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import { Container } from "native-base";

import { Font, AppLoading, ScreenOrientation } from "expo";

import Home from "./src/screens/Home/Home";
import Reports from "./src/screens/Reports/Reports";
import Settings from "./src/screens/Settings/Settings";
import Login from "./src/screens/Authentication/Login/Login";
import ResetPassword from "./src/screens/Authentication/ResetPassword/ResetPassword";
import CustomNavigation from "./src/screens/CustomNavigation/CustomNavigation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    ScreenOrientation.allow("PORTRAIT_UP");
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

const AuthStack = createStackNavigator(
  {
    Login: Login,
    ResetPassword: ResetPassword
  },
  {
    headerMode: "none",
    initialRouteName: "ResetPassword",
    cardStyle: {
      opacity: 1
    }
  }
);

const DrawerStack = createDrawerNavigator(
  {
    Home: Home,
    Reports: Reports,
    Settings: Settings,
    Login: AuthStack
  },
  {
    // drawerWidth: 320,
    contentComponent: CustomNavigation,
    initialRouteName: "Home"
  }
);

const RootStack = createStackNavigator(
  {
    Drawer: DrawerStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "Auth",
    headerMode: "none"
  }
);

export default App;
