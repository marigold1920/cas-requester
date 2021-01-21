import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ConfirmModal = ({ message, onClose, onConfirm }) => (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.message}>{message}</Text>
            <Text style={[styles.message, styles.confirm]}>Bạn chắc chắn muốn tiếp tục?</Text>
            <View style={styles.action}>
                <TouchableOpacity onPress={onClose}>
                    <Text style={styles.button}>Đóng</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onConfirm}>
                    <Text style={styles.button}>Xác nhận</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

export default ConfirmModal;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 10,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        width: "90%",
        height: "auto",
        backgroundColor: "#fff",
        borderRadius: 10
    },
    message: {
        fontFamily: "Texgyreadventor-regular",
        color: "#0c0d22",
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    confirm: {
        fontFamily: "Texgyreadventor-bold"
    },
    action: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        borderTopWidth: 0.5,
        borderColor: "#0c0d22",
        paddingVertical: 10
    },
    button: {
        fontFamily: "Texgyreadventor-bold"
    }
});
