import { StyleSheet } from "react-native";
import rem, { deviceRevolution } from "../../components/constant.unit";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flexDirection: "column",
        position: "relative"
    },
    space__full: {
        width: deviceRevolution.width,
        height: deviceRevolution.height,
        display: "flex"
    },
    container_logo_feedback: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    container_submit: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20
    },
    logo_img: {
        width: 10 * rem,
        height: 9 * rem
    },
    feedback_title: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 20
    },
    feed_description: {
        marginTop: 10,
        width: 18 * rem,
        fontSize: 14,
        fontFamily: "Texgyreadventor-regular",
        textAlign: "center",
        color: "#8D8D8D"
    },
    cancel_button: {
        backgroundColor: "#FFF",
        paddingVertical: 5,
        borderRadius: 25,
        elevation: 30
    },
    cancel_text: {
        color: "#000000",
        fontSize: 16,
        fontFamily: "Texgyreadventor-regular"
    },
    submit_button: {
        backgroundColor: "#FFAB2E",
        paddingVertical: 5,
        paddingHorizontal: 35,
        borderRadius: 25,
        elevation: 30
    },
    submit_text: {
        color: "#FFF",
        fontSize: 16,
        fontFamily: "Texgyreadventor-regular"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
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
    message: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: "Texgyreadventor-regular",
        color: "#494958"
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
