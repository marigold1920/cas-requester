import { StyleSheet } from "react-native";
import rem from "../../components/constant.unit";
const styles = StyleSheet.create({
    //css container:
    container: {
        flex: 1,
    },
    container_info: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    container_block_update_info: {
        flex: 4,
        marginHorizontal: 22,
    },
    container_text_input: {
        marginTop: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: "#B9C5E6",
        paddingBottom: 3,
    },
    container_button_save: {
        flexDirection: "column",
        marginTop: 10,
    },
    //css child:
    joining_day_title: {
        marginTop: 5,
        fontSize: 19,
        color: "#26324A",
        fontWeight: "400",
        fontFamily: "Nunito_400Regular",
    },
    joining_day: {
        fontSize: 20,
        color: "#26324A",
        fontWeight: "600",
        fontFamily: "Nunito_400Regular",
    },
    label: {
        fontSize: 18,
    },
    text_input: {
        marginTop: 3,
        fontSize: 20,
    },
    //css button save:
    button_size: {
        backgroundColor: "#FFF",
        width: 10 * rem,
    },
    button_text: {
        color: "#26324A",
        fontFamily: "Roboto_500Medium",
    },
    text_policy: {
        marginTop: 10,
        color: "#8B8B8B",
        textAlign: "center",
    },
});

export default styles;
