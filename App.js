import React from "react";
import { StyleSheet, View, StatusBar, ActivityIndicator } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import * as Font from "expo-font";

import HomeScreen from "./src/screens/home-screen/home-screen";
import ProfileScreen from "./src/screens/profile-screen/profile-screen";
import LoginScreen from "./src/screens/login-screen/login-screen";

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  state = {
    assetsLoaded: false,
  };
  //font loadAsync
  async componentDidMount() {
    await Font.loadAsync({
      "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
      "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "nunito.regular": require("./assets/fonts/nunito.regular.ttf"),
      "nunito.bold": require("./assets/fonts/nunito.bold.ttf"),
    });

    this.setState({ assetsLoaded: true });
  }

  render() {
    const { assetsLoaded } = this.state;

    if (assetsLoaded) {
      return (
        <AppContainer
          ref={(nav) => {
            this.navigator = nav;
          }}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
