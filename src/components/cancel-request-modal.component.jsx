import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import CustomModal from "./custom-modal.componet";

const CancelRequestModal = ({ reason, action, visible }) => (
    <CustomModal title="Yêu cầu không hoàn thành" visible={visible}>
        <View style={styles.textCover}>
            <Text style={styles.reason}>
                Yêu cầu của bạn không được hoàn thành do tài xế gặp sự cố. Bạn có thể xem lại nguyên
                nhân trong phần lịch sử.
            </Text>
            <Text style={styles.bold}>{reason}</Text>
        </View>
        <TouchableOpacity onPress={action}>
            <Text style={styles.action}>Xác nhận</Text>
        </TouchableOpacity>
    </CustomModal>
);

export default CancelRequestModal;

const styles = StyleSheet.create({
    textCover: {
        display: "flex",
        flexDirection: "row"
    },
    reason: {
        fontFamily: "Texgyreadventor-regular",
        color: "#222",
        marginVertical: 20,
        paddingHorizontal: 20
    },
    bold: {
        fontFamily: "Texgyreadventor-bold"
    },
    action: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 13,
        paddingVertical: 8,
        paddingHorizontal: 50,
        borderRadius: 20,
        marginBottom: 10,
        color: "#0132f5",
        backgroundColor: "#f3f3f4"
    }
});
