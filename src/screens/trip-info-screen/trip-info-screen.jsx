import React, { Component } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { View, StyleSheet, Text, Image } from "react-native";
import MapView from "react-native-maps";

import rem from "../../components/constant.unit";
import ButtonWithImage from "../../components/button-image.component";

import styles from "./trip-info-styles";
import ButtonText from "../../components/button-text.component";

class TripInfoScreen extends Component {
  state = {
    spinner: true,
  };

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          spinner: false,
        }),
      3000
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.spinner}
          textContent={"Đang tìm tài xế phù hợp cho bạn..."}
          textStyle={styles.spinnerTextStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default TripInfoScreen;
