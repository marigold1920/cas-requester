import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        position: "relative",
        justifyContent: "center",
        alignItems: "center"
    },
    driverInfo: {
        height: height * 0.4,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    content: {
        width: width,
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        flex: 1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
        marginTop: 50
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: "#26324A"
    },
    role: {
        fontSize: 14,
        color: "#787881"
    },
    licensePlate: {
        fontSize: 18,
        color: "#494958"
    },
    status: {
        position: "absolute",
        bottom: -15,
        backgroundColor: "#A147E4",
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    details: {
        width: width,
        height: height * 0.6,
        display: "flex",
        flexDirection: "column",
        marginTop: 30,
        paddingHorizontal: 30
    },
    note: {
        backgroundColor: "#fff",
        color: "#4F5C77",
        opacity: 0.75,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        minHeight: 80
    },
    action: {
        position: "absolute",
        bottom: 10,
        zIndex: 50,
        backgroundColor: "#FFAB2E",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        color: "#fff",
        fontSize: 16
    }
});

export default styles;
