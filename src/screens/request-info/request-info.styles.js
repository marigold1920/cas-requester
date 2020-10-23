import { StyleSheet } from "react-native";
import { deviceRevolution } from "../../components/constant.unit";

const styles = StyleSheet.create({
    //css for parents container:
    container: {
        flex: 1,
        flexDirection: "column",
        position: "relative",
        backgroundColor: "#fff"
    },
    map: {
        height: deviceRevolution.height * 0.45,
        marginTop: 10
    },
    request__info: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10
    },
    driver__info: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    driver__image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    group: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 10
    },
    rating: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 4
    },
    star: {
        width: 10,
        height: 10,
        marginHorizontal: 1
    },
    name: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 18,
        color: "#444444"
    },
    license__plate: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 12
    },
    contact: {
        display: "flex",
        flexDirection: "row"
    },
    driver__phone: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 16,
        color: "#444444"
    },
    location: {
        width: "75%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    group__action: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
    action: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 16,
        color: "#fff",
        backgroundColor: "#0CBA70",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: "transparent",
        elevation: 20
    },
    cancel: {
        backgroundColor: "#f30000"
    }
});

export default styles;
