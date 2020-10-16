import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Location = ({ name, value, icon }) => (
    <View style={styles.item}>
        <Image style={styles.location__icon} source={{ uri: icon }} />
        <View style={styles.address}>
            <Text style={styles.address__name}>{name}</Text>
            <Text style={styles.address__value}>{value}</Text>
        </View>
    </View>
);

export default Location;

const styles = StyleSheet.create({
    item: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5
    },
    location__icon: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    address: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    address__name: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 14,
        color: "#666666"
    },
    address__value: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 12,
        color: "#666666"
    }
});
