import React from "react";
import { StyleSheet, View, StatusBar, ActivityIndicator } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import * as Font from "expo-font";

import HomeScreen from "./src/screens/home-screen/home-screen";
import ProfileScreen from "./src/screens/profile-screen/profile-screen";
import LoginScreen from "./src/screens/login-screen/login-screen";
import RegisterScreen from "./src/screens/register-screen/register-screen";
import HistoryScreen from "./src/screens/history-screen/history-screen";

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    History: HistoryScreen,
  },
  {
    initialRouteName: "Login", //change this att to change initial screen
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
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "nunito.bold": require("./assets/fonts/nunito.bold.ttf"),
      "nunito.regular": require("./assets/fonts/nunito.regular.ttf"),
      "nunito.light": require("./assets/fonts/nunito.light.ttf"),
      "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
      "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
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
