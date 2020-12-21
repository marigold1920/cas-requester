import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { withNavigation } from "react-navigation";

import LabelIcon from "./label-icon.component";
import ButtonText from "./button-text.component";

const CustomRowHistory = ({
    item: { requestId, destinationName, address, userImage, status, dateCreated, timeCreated },
    navigation
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.container_infor}>
                <Image source={{ uri: userImage }} style={styles.image} />
                <View style={styles.container_detail}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{destinationName}</Text>
                        <Text style={styles.status}>{status}</Text>
                    </View>
                    <Text style={styles.description}>{address}</Text>
                    <View style={styles.container_date_time}>
                        <LabelIcon
                            iconSrc={require("../../assets/icons/date-icon.png")}
                            title={dateCreated}
                            titleStyle={styles.date}
                        />
                        <LabelIcon
                            iconSrc={require("../../assets/icons/time-icon.png")}
                            title={timeCreated}
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
                        onPress={() => navigation.navigate("RequestDetails", { requestId })}
                    />
                    {/* <ButtonText
                        textContent="Đánh giá"
                        styleButton={styles.detail_feedback_button}
                        styleText={styles.detail_feedback_text}
                        onPress={() => navigation.navigate("Feedback")}
                    /> */}
                </View>
            </View>
        </View>
    );
};

export default withNavigation(CustomRowHistory);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginBottom: 10
    },
    container_infor: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 10
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    status: {
        marginLeft: 10,
        borderWidth: 0.5,
        borderColor: "#00960F",
        fontFamily: "Texgyreadventor-regular",
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 15,
        fontSize: 10,
        color: "#00960F"
    },
    container_detail: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 5,
        justifyContent: "center",
        backgroundColor: "white",
        opacity: 1,
        borderRadius: 15,
        paddingHorizontal: 5,
        paddingTop: 10
    },
    title: {
        fontFamily: "Texgyreadventor-bold",
        color: "#26324A",
        marginBottom: 2
    },
    description: {
        fontSize: 12,
        color: "#3E5075",
        fontFamily: "Texgyreadventor-regular"
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    container_date_time: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 5
    },
    date: {
        fontFamily: "Texgyreadventor-regular",
        width: 120,
        marginRight: 10,
        fontSize: 12
    },
    time: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 12
    },
    container_detail_feedback: {
        flex: 1,
        flexDirection: "row"
    },
    detail_feedback_button: {
        marginRight: 20,
        paddingVertical: 2,
        paddingHorizontal: 5
    },
    detail_feedback_text: {
        fontSize: 13,
        color: "#26324A"
    }
});
