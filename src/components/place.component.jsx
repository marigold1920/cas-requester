import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

const Place = ({ place: { name, address, date, time } }) => (
    <View style={styles.place}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
        <View style={styles.dateTime}>
            <View style={styles.item}>
                <Image style={styles.icon} source={require("../../assets/icons/date-icon.png")} />
                <Text style={styles.value}>{date}</Text>
            </View>
            <View style={styles.item}>
                <Image style={styles.icon} source={require("../../assets/icons/time-icon.png")} />
                <Text style={styles.value}>{time}</Text>
            </View>
        </View>
    </View>
);

export default Place;

const styles = StyleSheet.create({
    place: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        opacity: 0.75,
        borderRadius: 10,
        paddingVertical: 10,
        paddingLeft: 30,
        paddingRight: 20,
        marginBottom: 5
    },
    name: {
        fontSize: 16,
        color: "#26324A",
        fontFamily: "Texgyreadventor-bold"
    },
    address: {
        fontSize: 14,
        color: "#4F5C77",
        marginBottom: 5,
        fontFamily: "Texgyreadventor-regular"
    },
    dateTime: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center"
    },
    item: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    value: {
        color: "#26324A",
        fontSize: 14,
        fontFamily: "Texgyreadventor-regular"
    }
});
