import { StyleSheet } from "react-native";
import { deviceRevolution } from "../../components/constant.unit";

const styles = StyleSheet.create({
    //css for parents container:
    container: {
        flex: 1,
        flexDirection: "column",
        position: "relative"
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
    action__wrapper: {
        elevation: 30,
        padding: 0
    },
    action: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 16,
        color: "#fff",
        backgroundColor: "#0CBA70",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        borderColor: "transparent",
        elevation: 30
    }
});

export default styles;
