import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";

const FormInput = ({ icon, ...otherProps }) => (
    <View style={styles.item}>
        <Image style={styles.icon} source={{ uri: icon }} />
        <TextInput style={styles.text} {...otherProps} />
    </View>
);

export default FormInput;

const styles = StyleSheet.create({
    icon: {
        position: "absolute",
        top: "35%",
        left: 20,
        width: 18,
        height: 18,
        zIndex: 1
    },
    text: {
        width: "100%",
        borderWidth: 0.1,
        borderColor: "#444444",
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 20,
        paddingLeft: 50,
        marginVertical: 3,
        fontFamily: "Texgyreadventor-regular",
        fontSize: 16,
        color: "#444444",
        backgroundColor: "#fff"
    }
});
