import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        position: "relative"
    },
    container_button: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    button: {
        elevation: 12
    },
    button_text: {
        color: "#26324A",
        paddingVertical: 2
    },
    group: {
        width: "90%"
    },
    label: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 14,
        color: "#787881"
    },
    modal: {
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        zIndex: -1,
        opacity: 0
    },
    modal__content: {
        width: "90%",
        height: "25%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 20,
        paddingHorizontal: 10
    },
    status: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 18,
        marginTop: 30
    },
    action: {
        position: "absolute",
        paddingVertical: 8,
        paddingHorizontal: 40,
        borderRadius: 20,
        backgroundColor: "#5E00FF",
        fontFamily: "Texgyreadventor-regular",
        fontSize: 16,
        color: "#fff",
        bottom: 10
    }
});

export default styles;
