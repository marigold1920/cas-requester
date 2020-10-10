import React, { Component } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { View, StyleSheet } from "react-native";

class ActivityIndicatorCustom extends Component {
  state = {
    spinner: false,
  };

  closeActivityIndicator = () =>
    setInterval(
      () =>
        this.setState({
          spinner: false,
        }),
      1000
    );

  componentDidMount = () => this.closeActivityIndicator();
  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.spinner}
          textContent={"Đang tìm tài xế phù hợp..."}
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

export default ActivityIndicatorCustom;
