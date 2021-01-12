import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        flexDirection: "column"
    },
    block_logo_name: {
        marginTop: 40
    },
    block_button: {
        flexDirection: "column",
        alignItems: "center"
    },
    title: {
        fontFamily: "Texgyreadventor-regular",
        width: "90%",
        marginBottom: 10,
        fontSize: 13
    },
    invalid: {
        fontFamily: "Texgyreadventor-regular",
        width: "90%",
        marginBottom: 10,
        fontSize: 12,
        color: "#ff0000"
    },
    otp: {
        fontFamily: "Texgyreadventor-regular",
        width: "90%",
        fontSize: 16,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.85)",
        borderRadius: 5
    },
    groupAction: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 0.5,
        marginTop: 20
    },
    action: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 15,
        marginVertical: 7
    },
    warning: {
        width: "90%",
        color: "#ff0000",
        fontFamily: "Texgyreadventor-regular",
        fontSize: 13,
        marginBottom: 5
    }
});

export default styles;
