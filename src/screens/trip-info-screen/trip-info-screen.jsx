import React, { Component } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { View } from "react-native";

import styles from "./trip-info-styles";

class TripInfoScreen extends Component {
    state = {
        spinner: true
    };

    componentDidMount() {
        setInterval(
            () =>
                this.setState({
                    spinner: false
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

export default TripInfoScreen;
