import { StyleSheet } from "react-native";
import rem from "../../components/constant.unit";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container_search_box: {
        alignItems: "center",
        flex: 1,
        marginBottom: 10,
    },
    customlist: {
        flex: 7,
    },
    container_button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 11 * rem,
        height: 4 * rem,
        backgroundColor: "#FFAB2E",
    },
    button_text: {
        color: "#FFF",
    },
});

export default styles;
