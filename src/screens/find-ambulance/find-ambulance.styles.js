import { StyleSheet } from "react-native";
import { deviceRevolution } from "../../components/constant.unit";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    content: {
        width: deviceRevolution.width,
        height: deviceRevolution.height * 0.95,
        paddingBottom: 310
    },
    reverse__order: {
        flexDirection: "column-reverse"
    }
});

export default styles;
