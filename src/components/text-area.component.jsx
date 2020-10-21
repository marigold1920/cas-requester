import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextArea = ({ textContent, contStyle, isRequire, ...otherProps }) => {
    const { container } = styles;
    const combineStylesContainer = StyleSheet.flatten([container, contStyle]);
    // StyleSheet.flatten giúp thay đổi bất cứ thuộc tính nào của container, nếu không thay đổi sẽ áp dụng thuộc tính default
    return (
        <View style={combineStylesContainer}>
            <Text style={styles.text}>
                {textContent} {isRequire ? <Text style={styles.require}>*</Text> : null}
            </Text>
            <TextInput
                style={styles.textArea}
                placeholder=""
                placeholderTextColor="grey"
                numberOfLines={5}
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
        marginBottom: 10
    },
    text: {
        color: "#787881",
        fontFamily: "Texgyreadventor-regular",
        marginBottom: 8,
        fontSize: 14
    },
    textArea: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 16,
        backgroundColor: "#FFF",
        borderRadius: 10,
        paddingHorizontal: 15,
        color: "#787881"
    },
    require: {
        color: "#ff0000"
    }
});

export default TextArea;
