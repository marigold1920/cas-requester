import React, { Component } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { View, Text, Image } from "react-native";

import styles from "./trip-info-styles";
import ButtonWithImage from "../../components/button-image.component";
import rem from "../../components/constant.unit";
import MapView from "react-native-maps";
import ButtonText from "../../components/button-text.component";

class TripInfoScreen extends Component {
    state = {
        spinner: true
    };

    componentDidMount() {
        setTimeout(
            () =>
                this.setState({
                    spinner: false
                }),
            3000
        );
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    flexDirection: "column"
                }}
            >
                {/* <View style={styles.loading}>
          <Spinner
            visible={this.state.spinner}
            textContent={"Đang tìm tài xế phù hợp cho bạn..."}
            textStyle={styles.spinnerTextStyle}
          />
        </View> */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20
                        // borderBottomColor: "red",
                        // borderBottomWidth: 0.5,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                            flexDirection: "row"
                        }}
                    >
                        <View style={styles.back_arrow}>
                            <ButtonWithImage
                                imgSrc={require("../../../assets/icons/back-arrow.png")}
                                styleImg={{ width: 2 * rem, height: 2 * rem }}
                                gotoScreen={() => {
                                    this.props.navigation.navigate("FindCar");
                                }}
                            />
                        </View>
                        <View style={{ flex: 6 }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontFamily: "Nunito_800ExtraBold"
                                }}
                            >
                                Đã tìm được tài xế phù hợp
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flex: 2,
                            justifyContent: "center",
                            flexDirection: "row"
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "column",
                                flex: 1,
                                alignItems: "center"
                            }}
                        >
                            <Image
                                style={{
                                    width: 7 * rem,
                                    height: 7 * rem,
                                    borderRadius: 100
                                }}
                                source={require("../../../assets/icons/mock-driver.png")}
                            />
                            <View
                                style={{
                                    marginTop: 10,
                                    justifyContent: "center",
                                    flexDirection: "row"
                                }}
                            >
                                <Image
                                    style={styles.star_icon}
                                    source={require("../../../assets/icons/yellow-star.png")}
                                />
                                <Image
                                    style={styles.star_icon}
                                    source={require("../../../assets/icons/yellow-star.png")}
                                />
                                <Image
                                    style={styles.star_icon}
                                    source={require("../../../assets/icons/yellow-star.png")}
                                />
                                <Image
                                    style={styles.star_icon}
                                    source={require("../../../assets/icons/grey-star.png")}
                                />
                                <Image
                                    style={styles.star_icon}
                                    source={require("../../../assets/icons/grey-star.png")}
                                />
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: "column",
                                flex: 1.5,
                                borderRadius: 10,
                                borderWidth: 0.5,
                                borderColor: "#D0CBCB",
                                padding: 5,
                                marginHorizontal: 15,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <View style={{ marginBottom: 10 }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontFamily: "Roboto_500Medium"
                                    }}
                                >
                                    Nguyễn Văn Huy
                                </Text>
                            </View>

                            <View
                                style={{
                                    backgroundColor: "#FFF",
                                    borderRadius: 5,
                                    borderColor: "black",
                                    borderWidth: 1,
                                    justifyContent: "center",
                                    paddingVertical: 7
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 20,
                                        textAlign: "center",
                                        fontFamily: "Roboto_700Bold",
                                        color: "black",
                                        width: 9 * rem
                                    }}
                                >
                                    29A 021.38
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container_mapview}>
                    <MapView style={styles.map_view} />
                </View>
                <View style={styles.container_contact}>
                    <View style={styles.callButton}>
                        <ButtonWithImage
                            imgSrc={require("../../../assets/icons/phone-call.png")}
                            styleImg={{ width: 2 * rem, height: 2 * rem }}
                        />
                        <Text style={{ marginTop: 5 }}>Gọi điện</Text>
                    </View>
                    <View style={styles.block_button}>
                        <ButtonText
                            textContent="Hủy chuyến"
                            styleText={styles.text}
                            styleButton={styles.cancel_button}
                            gotoScreen={() => {
                                this.props.navigation.navigate("Feedback");
                            }}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default TripInfoScreen;
