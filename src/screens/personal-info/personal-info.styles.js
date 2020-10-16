import { StyleSheet } from "react-native";
import rem from "../../components/constant.unit";
const styles = StyleSheet.create({
    //css container:
    container: {
        flex: 1
    },
    container_info: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    container_block_update_info: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    container_text_input: {
        width: "75%",
        marginTop: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "#B9C5E6",
        paddingBottom: 3
    },
    container_button_save: {
        flexDirection: "column",
        marginTop: 10
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
        fontSize: 14,
        fontFamily: "Texgyreadventor-regular",
        color: "#787881"
    },
    text_input: {
        marginTop: 3,
        fontSize: 18,
        fontFamily: "Texgyreadventor-regular",
        color: "#494958"
    },
    //css button save:
    button_size: {
        marginVertical: 20,
        backgroundColor: "#FFF",
        paddingVertical: 5,
        elevation: 30
    },
    button_text: {
        color: "#26324A",
        fontFamily: "Texgyreadventor-regular"
    },
    text_policy: {
        marginTop: 10,
        fontSize: 12,
        color: "#8B8B8B",
        textAlign: "center",
        fontFamily: "Texgyreadventor-regular"
    }
});

export default styles;
