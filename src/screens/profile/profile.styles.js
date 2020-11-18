import { StyleSheet } from "react-native";
import { deviceRevolution } from "../../components/constant.unit";
const styles = StyleSheet.create({
    container: {
        position: "relative"
    },
    profile: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        width: deviceRevolution.width * 0.95
    },
    button: {
        elevation: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
        opacity: 0.65
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
        fontSize: 13,
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
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 20,
        backgroundColor: "#5E00FF",
        fontFamily: "Texgyreadventor-regular",
        fontSize: 16,
        color: "#fff",
        bottom: 10
    },
    textError:{
        color:'red',
        fontSize:10,
        textAlign:'left'
    }
});

export default styles;
