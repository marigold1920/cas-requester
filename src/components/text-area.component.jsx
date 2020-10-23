import React from "react";

import { Text, View, StyleSheet, TextInput } from "react-native";
import rem from "./constant.unit";

const TextArea = ({ textContent, contStyle, ...otherProps }) => {
    const { container } = styles;
    const combineStylesContainer = StyleSheet.flatten([container, contStyle]);
    // StyleSheet.flatten giúp thay đổi bất cứ thuộc tính nào của container, nếu không thay đổi sẽ áp dụng thuộc tính default
    return (
        <View style={combineStylesContainer}>
            <Text style={styles.text}>
                {textContent} <Text style={styles.require}>*</Text>
            </Text>
            <TextInput
                style={styles.textArea}
                placeholder=""
                placeholderTextColor="grey"
                numberOfLines={4}
                multiline={true}
                {...otherProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 20,
        width: "90%",
        marginBottom: 20
    },
    text: {
        color: "#787881",
        fontFamily: "Texgyreadventor-regular",
        marginBottom: 8,
        fontSize: 16
    },
    textArea: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 16,
        backgroundColor: "#FFF",
        borderRadius: 10,
        paddingHorizontal: 15,
        color: "#787881",
        minHeight: 120
    },
    require: {
        color: "#ff0000"
    }
});

export default TextArea;
