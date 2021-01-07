import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { deviceRevolution } from "./constant.unit";

const mapStatus = {
    SUCCESS: "Thành công",
    FAIL: "Không thành công",
    CANCELED: "Bị hủy bỏ"
};

const DriverInfo = ({ request: { driver, ambulance, request_status } }) => (
    <View style={styles.driverInfo}>
        {driver ? (
            <View style={styles.content}>
                <Image style={styles.image} source={{ uri: driver.imageUrl }} />
                <Text style={styles.name}>{driver.displayName}</Text>
                <Text style={styles.licensePlate}>{ambulance.licensePlate}</Text>
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
        <Text style={styles.status}>{mapStatus[request_status]}</Text>
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
        width: deviceRevolution.width,
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45
    },
    background: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 45,
        marginTop: 20
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
        fontFamily: "Texgyreadventor-bold",
        marginBottom: 30
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
