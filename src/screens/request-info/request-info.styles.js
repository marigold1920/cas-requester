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
        backgroundColor: "#fff",
        paddingTop: 10
    },
    driver__info: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    driver__image: {
        width: 85,
        height: 85,
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
        marginBottom: 10
    },
    action: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 12,
        color: "#555",
        backgroundColor: "#f3f3f4",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderColor: "transparent"
    }
});

export default styles;
