import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Location = ({ name, value, icon, title }) => (
    <View style={styles.item}>
        <View style={{ alignItems: "center", marginRight: 10 }}>
            <Image style={styles.location__icon} source={{ uri: icon }} />
            <Text style={[styles.address__value, { color: "#666" }]}>{title}</Text>
        </View>
        <View style={styles.address}>
            <Text style={styles.address__name}>{name}</Text>
            <Text style={styles.address__value}>{value}</Text>
        </View>
    </View>
);

export default Location;

const styles = StyleSheet.create({
    item: {
        width: "95%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
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
        justifyContent: "center",
        marginBottom: 15
    },
    address__name: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 14,
        color: "#26324a"
    },
    address__value: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 11,
        color: "#6c7fa6"
    }
});
