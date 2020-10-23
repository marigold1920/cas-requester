import React from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";

const TextInputIcon = ({ imgSrc, placeholder, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {imgSrc ? (
                <View style={styles.bgr_image}>
                    <Image source={imgSrc} style={styles.image} />
                </View>
            ) : null}
            <TextInput
                {...otherProps}
                style={styles.text_input}
                placeholder={placeholder}
                placeholderTextColor="#FFF"
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255,255,255,0.4)",
        flexDirection: "row",
        width: "80%",
        borderRadius: 60,
        marginBottom: 15
    },
    bgr_image: {
        backgroundColor: "#FFF",
        padding: 13,
        borderRadius: 70
    },
    image: {
        width: 20,
        height: 20
    },
    text_input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        fontFamily: "Texgyreadventor-regular",
        color: "#FFF",
        marginLeft: 7,
        width: "100%"
    }
});
export default TextInputIcon;
