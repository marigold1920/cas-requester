import React, { Component } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { View, StyleSheet } from "react-native";

class CustomLoading extends Component {
  state = {
    isShowSpinner: true,
  };

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          isShowSpinner: false,
        }),
      3000
    );
  }
  componentWillUnmount() {
    this.isShowSpinner = false;
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.isShowSpinner}
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
});

export default CustomLoading;
