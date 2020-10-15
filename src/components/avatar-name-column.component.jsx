import React from "react";

import { Text, View, Image, StyleSheet } from "react-native";
import rem from "./constant.unit";

const AvatarNameCol = ({ imgSource, textContent, contStyle, imgStyle, textStyle }) => {
    const { container, image, text } = styles;
    const combineStylesContainer = StyleSheet.flatten([container, contStyle]);
    const combineStylesImage = StyleSheet.flatten([image, imgStyle]);
    const combineStylesText = StyleSheet.flatten([text, textStyle]);
    // StyleSheet.flatten giúp thay đổi bất cứ thuộc tính nào của container, nếu không thay đổi sẽ áp dụng thuộc tính default
    return (
        <View style={combineStylesContainer}>
            <Image style={combineStylesImage} source={imgSource} />
            <Text style={combineStylesText}>{textContent}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    image: {
        width: 13 * rem,
        height: 13 * rem,
        borderRadius: 100,
        marginBottom: 10
    },
    text: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 22,
        color: "#494958"
    }
});

export default AvatarNameCol;
