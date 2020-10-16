import { StyleSheet } from "react-native";
import { deviceRevolution } from "../../components/constant.unit";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        overflow: "hidden"
    },
    order__container: {
        width: deviceRevolution.width,
        height: deviceRevolution.height * 0.95,
        display: "flex",
        flexDirection: "column"
    },
    reverse__order: {
        flexDirection: "column-reverse"
    },
    container_mapview: {
        flex: 1,
        marginTop: 10
    },
    container_car_finding: {
        flex: 0.7,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    map__view: {
        width: deviceRevolution.width,
        height: deviceRevolution.height * 0.45
    },
    loading: {
        height: deviceRevolution.height * 0.35,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    message: {
        fontFamily: "Texgyreadventor-regular",
        color: "#444444",
        fontSize: 16
    },
    loading__icon: {
        width: 30,
        height: 30,
        marginVertical: 5
    },
    time__counter: {
        fontFamily: "Texgyreadventor-bold",
        color: "#444444",
        fontSize: 18
    },
    action: {
        backgroundColor: "#f30000",
        color: "#fff",
        fontSize: 16,
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        fontFamily: "Texgyreadventor-regular",
        elevation: 12
    }
});

export default styles;
