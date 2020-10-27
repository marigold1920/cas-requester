import React from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import rem from "../components/constant.unit";
const ButtonImgBgr = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <ImageBackground source={props.imgSrc} style={styles.menu_Img}>
                <Text style={styles.menu_title}>{props.title}</Text>
                <Text style={styles.menu_content}>{props.content}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menu_Img: {
        height: 18 * rem,
        width: 14 * rem,
        alignItems: "center",
        justifyContent: "center",
    },
    menu_title: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "Texgyreadventor-bold",
        textAlign: "center",
        color: "#494958",
    },
    menu_content: {
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Texgyreadventor-regular",
        marginHorizontal: 10,
        color: "#8D8D8D",
    },
});
export default ButtonImgBgr;
