import { StyleSheet } from "react-native";
import { deviceRevolution } from "../../components/constant.unit";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    block_logo_name: {
        marginTop: 40
    },
    block_button: {
        height: deviceRevolution.height * 0.4,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default styles;
