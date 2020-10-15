import React from "react";

import { Text, View, Image, StyleSheet, contStyle } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import rem from "./constant.unit";

const HeaderTileWithBackBtn = ({ textContent, gotoScreen }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container_back_button}>
                <MaterialCommunityIcons
                    name="chevron-left"
                    size={33}
                    color="#494958"
                    onPress={gotoScreen}
                />
            </View>
            <View style={styles.container_header_title}>
                <Text style={styles.text_content}>{textContent}</Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    //css for parents:
    container: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "flex-start",
        marginLeft: 10,
    },
    container_back_button: {
        flex: 1,
    },
    container_header_title: {
        flex: 7,
        marginTop: 5,
    },
    //css for child:
    image: {
        width: 21,
        height: 21,
    },
    text_content: {
        fontSize: 21,
        fontFamily: "Texgyreadventor-regular",
        color: "#494958",
        textAlign: "center",
    },
});

export default HeaderTileWithBackBtn;
