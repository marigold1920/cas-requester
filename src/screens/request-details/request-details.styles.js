import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.9,
        position: "relative",
        alignItems: "center"
    },
    action: {
        position: "absolute",
        bottom: 10,
        zIndex: 50,
        backgroundColor: "#FFAB2E",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        color: "#fff",
        fontSize: 16,
        fontFamily: "Texgyreadventor-regular",
        elevation: 10
    }
});

export default styles;
