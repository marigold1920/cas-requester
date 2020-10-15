import React from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import rem from "../components/constant.unit";
const ButtonImgBgr = (props) => {
    return (
        <TouchableOpacity onPress={props.gotoScreen}>
            <ImageBackground source={props.imgSrc} style={styles.menu_Img}>
                <Text style={styles.menu_title}>{props.title}</Text>
                <Text style={styles.menu_content}>{props.content}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menu_Button: {
        padding: 5,
    },
    menu_Img: {
        height: 18 * rem,
        width: 14 * rem,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    menu_title: {
        fontSize: 17,
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "Texgyreadventor-bold",
        textAlign: "center",
    },
    menu_content: {
        textAlign: "center",
        fontSize: 15,
        fontFamily: "Texgyreadventor-regular",
        marginHorizontal: 10,
    },
});
export default ButtonImgBgr;
