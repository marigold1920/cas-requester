import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Spinner = ({ message }) => (
    <View style={styles.spinner}>
        <View style={styles.spinnerOverplay}>
            <Image style={styles.image} source={require("../../assets/icons/loading.gif")} />
            {/* <Image
                style={styles.imageInner}
                source={require("../../assets/icons/loading-inner.gif")}
            /> */}
            <Text style={styles.message}>{message}</Text>
        </View>
    </View>
);

export default Spinner;

const styles = StyleSheet.create({
    spinner: {
        height: "auto",
        zIndex: 20,
        display: "flex",
        flexDirection: "column",
        borderRadius: 15
    },
    spinnerOverplay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    message: {
        marginTop: 130,
        fontFamily: "Texgyreadventor-regular",
        color: "#444"
    },
    image: {
        position: "absolute",
        width: 110,
        height: 110
    },
    imageInner: {
        position: "absolute",
        width: 80,
        height: 80
    }
});
