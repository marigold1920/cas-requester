import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const DriverInfo = ({ request: { driver, licensePlate, status } }) => (
    <View style={styles.driverInfo}>
        <Image
            style={styles.background}
            source={require("../../assets/images/request-details-bg.png")}
        />
        {driver ? (
            <View style={styles.content}>
                <Image style={styles.image} source={{ uri: driver.imageUrl }} />
                <Text style={styles.name}>{driver.displayName}</Text>
                <Text style={styles.licensePlate}>{licensePlate}</Text>
                <Text style={styles.phone}>{driver.phone}</Text>
            </View>
        ) : (
            <View style={[styles.content, { justifyContent: "center" }]}>
                <Image
                    style={styles.noData}
                    source={{ uri: "https://i.ibb.co/G3KybLH/loading.png" }}
                />
                <Text style={styles.noDataMessage}>Không có dữ liệu của tài xế</Text>
            </View>
        )}
        <Text style={styles.status}>{status}</Text>
    </View>
);

export default DriverInfo;

const styles = StyleSheet.create({
    driverInfo: {
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    content: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    background: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginTop: 50
    },
    noData: {
        width: 100,
        height: 100
    },
    noDataMessage: {
        fontFamily: "Texgyreadventor-regular",
        marginTop: 10,
        color: "#888"
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: "#26324A",
        fontFamily: "Texgyreadventor-bold"
    },
    licensePlate: {
        fontSize: 12,
        color: "#787881",
        fontFamily: "Texgyreadventor-regular"
    },
    phone: {
        fontSize: 16,
        color: "#494958",
        fontFamily: "Texgyreadventor-bold"
    },
    status: {
        position: "absolute",
        bottom: -16,
        backgroundColor: "#00D816",
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        fontFamily: "Texgyreadventor-regular",
        fontSize: 16
    }
});
