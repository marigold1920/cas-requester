import { StyleSheet } from "react-native";
import rem from "../../components/constant.unit";

const styles = StyleSheet.create({
    //css for 4 parents containers:
    container: {
        flex: 1,
        flexDirection: "column"
    },
    container_logo_feedback: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    container_submit: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20
    },
    back_arrow: { flex: 1, marginTop: 34, marginLeft: 8 },
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
        borderRadius: 25
    },
    cancel_text: {
        color: "#000000",
        fontSize: 18,
        fontFamily: "Texgyreadventor-regular"
    },
    submit_button: {
        backgroundColor: "#FFAB2E",
        paddingVertical: 5,
        paddingHorizontal: 35,
        borderRadius: 25
    },
    submit_text: {
        color: "#FFF",
        fontSize: 18,
        fontFamily: "Texgyreadventor-regular"
    },
    //css for modal:
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: "Texgyreadventor-bold"
    },
    modalText: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: 18
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default styles;
