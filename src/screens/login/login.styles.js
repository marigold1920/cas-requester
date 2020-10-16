import { StyleSheet } from "react-native";
import { deviceRevolution } from "../../components/constant.unit";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceRevolution.height,
        flexDirection: "column"
    },
    block_logo_name: {
        marginTop: 40
    },
    block_button: {
        flexDirection: "column",
        alignItems: "center"
    }
});

export default styles;
