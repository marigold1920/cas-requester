import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonText = ({ onPress, textContent, styleButton, styleText }) => (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.button, styleButton]} onPress={onPress}>
            <Text style={[styles.text, styleText]}>{textContent}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 18,
        color: "red",
        paddingVertical: 5,
        paddingHorizontal: 15
    }
});
export default ButtonText;
