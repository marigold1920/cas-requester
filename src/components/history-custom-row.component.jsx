import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { withNavigation } from "react-navigation";

import ButtonText from "./button-text.component";
import LabelIcon from "./label-icon.component";

const CustomRowHistory = ({ title, address, image_url, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container_infor}>
                <Image source={{ uri: image_url }} style={styles.image} />
                <View style={styles.container_detail}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{address}</Text>
                    <View style={styles.container_date_time}>
                        <LabelIcon
                            iconSrc={require("../../assets/icons/date-icon.png")}
                            title="21/09/2020"
                            titleStyle={styles.date}
                        />
                        <LabelIcon
                            iconSrc={require("../../assets/icons/time-icon.png")}
                            title="10:50"
                            titleStyle={styles.time}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.container_detail_feedback}>
                <View style={{ flex: 1 }}></View>
                <View
                    style={{
                        flex: 2,
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    <ButtonText
                        textContent="Chi Tiết"
                        styleButton={styles.detail_feedback_button}
                        styleText={styles.detail_feedback_text}
                        gotoScreen={() => navigation.navigate("RequestDetails")}
                    />
                    <ButtonText
                        textContent="Đánh giá"
                        styleButton={styles.detail_feedback_button}
                        styleText={styles.detail_feedback_text}
                        gotoScreen={() => navigation.navigate("Feedback")}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginBottom: 20
    },
    container_infor: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    },

    container_detail: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 12,
        justifyContent: "center",
        backgroundColor: "white",
        opacity: 1,
        borderRadius: 15,
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 5
    },
    title: {
        fontSize: 16,
        fontFamily: "Texgyreadventor-bold",
        color: "#26324A",
        marginBottom: 2
    },
    description: {
        fontSize: 14,
        color: "#3E5075",
        fontFamily: "Texgyreadventor-regular"
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 15
    },
    container_date_time: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 5
    },
    date: {
        fontFamily: "Texgyreadventor-regular",
        width: 120,
        marginRight: 10
    },
    time: {
        fontFamily: "Texgyreadventor-regular"
    },
    container_detail_feedback: {
        flex: 1,
        flexDirection: "row"
    },
    detail_feedback_button: {
        marginRight: 20,
        paddingVertical: 3,
        paddingHorizontal: 5
    },
    detail_feedback_text: {
        fontSize: 15,
        color: "#26324A"
    }
});

export default withNavigation(CustomRowHistory);
