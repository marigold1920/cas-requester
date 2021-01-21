import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HeaderTileWithBackBtn = ({ textContent }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container_header_title}>
                <Text style={styles.text_content}>{textContent}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    //css for parents:
    container: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: "#fff"
    },
    container_header_title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    text_content: {
        fontFamily: "Texgyreadventor-bold",
        color: "#494958",
        textAlign: "center"
    }
});

export default HeaderTileWithBackBtn;
