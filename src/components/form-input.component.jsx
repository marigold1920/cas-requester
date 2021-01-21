import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";

const FormInput = ({ icon, style, ...otherProps }) => (
    <View style={styles.item}>
        <Image style={styles.icon} source={{ uri: icon }} />
        <TextInput style={[styles.text, style]} {...otherProps} />
    </View>
);

export default FormInput;

const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        top: "35%",
        left: 10,
        width: 18,
        height: 18,
        zIndex: 1
    },
    text: {
        width: "100%",
        borderWidth: 0.5,
        borderColor: "#0c0d22",
        borderRadius: 3,
        paddingVertical: 6,
        paddingHorizontal: 10,
        paddingLeft: 35,
        marginVertical: 3,
        fontFamily: "Texgyreadventor-regular",
        fontSize: 14,
        color: "#0c0d22",
        backgroundColor: "rgba(255, 255, 255, 0.85)"
    }
});
