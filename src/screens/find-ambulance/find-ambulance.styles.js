import { StyleSheet } from "react-native";
import { deviceRevolution } from "../../components/constant.unit";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        width: deviceRevolution.width,
        height: deviceRevolution.height,
        flexDirection: "column"
    },
    order__container: {
        width: deviceRevolution.width,
        height: deviceRevolution.height * 0.95,
        display: "flex",
        flexDirection: "column",
        position: "relative"
    },
    reverse__order: {
        flexDirection: "column-reverse"
    }
});

export default styles;
