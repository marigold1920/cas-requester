import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const HeaderTileWithBackBtn = ({ textContent, onPress, style }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.container_back_button}>
                <Icon onPress={onPress} size={20} color="#666" name="keyboard-backspace" />
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
        marginTop: 15,
        justifyContent: "center",
        paddingLeft: 10
    },
    container_back_button: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    container_header_title: {
        flex: 7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    //css for child:
    image: {
        width: 21,
        height: 21
    },
    text_content: {
        fontSize: 15,
        fontFamily: "Texgyreadventor-bold",
        color: "#494958",
        textAlign: "center"
    }
});

export default HeaderTileWithBackBtn;
