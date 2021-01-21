import { StyleSheet } from "react-native";
import { deviceRevolution } from "../../components/constant.unit";

const styles = StyleSheet.create({
    //css container:
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },
    container_info: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    container_text_input: {
        marginTop: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "#B9C5E6",
        paddingBottom: 3
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
    button_otp: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 15,
        marginVertical: 7
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
    modal: {
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
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
        width: "85%",
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: "#f5f5f5",
        fontFamily: "Texgyreadventor-bold",
        fontSize: 13,
        color: "#222",
        textAlign: "center",
        marginLeft: "7%",
        marginTop: 20
    },
    //css child:
    joining_day_title: {
        fontSize: 14,
        color: "#26324A",
        fontWeight: "400",
        fontFamily: "Texgyreadventor-regular"
    },
    joining_day: {
        fontSize: 16,
        color: "#26324A",
        fontWeight: "600",
        fontFamily: "Texgyreadventor-regular"
    },
    label: {
        fontSize: 12,
        fontFamily: "Texgyreadventor-regular",
        color: "#787881"
    },
    text_input: {
        width: deviceRevolution.width * 0.85,
        marginTop: 3,
        fontSize: 16,
        fontFamily: "Texgyreadventor-regular",
        color: "#494958"
    },
    logout: {
        fontFamily: "Texgyreadventor-bold",
        color: "#494958",
        fontSize: 13,
        marginBottom: 10
    }
});

export default styles;
