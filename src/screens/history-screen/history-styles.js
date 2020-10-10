import { StyleSheet } from "react-native";
import rem from "../../components/constant.unit";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container_search_box: {
        flex: 1,
        marginTop: 30,
        marginBottom: 5
    },
    customlist: {
        flex: 5
    },
    container_button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        width: 11 * rem,
        height: 4 * rem,
        backgroundColor: "#FFAB2E"
    },
    button_text: {
        color: "#FFF"
    }
});

export default styles;
