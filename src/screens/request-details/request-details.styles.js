import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        position: "relative",
        alignItems: "center"
    },
    details: {
        width: "100%",
        height: "45%",
        display: "flex",
        flexDirection: "column",
        marginTop: 30,
        paddingHorizontal: 30
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
