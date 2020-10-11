import { StyleSheet } from "react-native";
import rem from "../../components/constant.unit";
const styles = StyleSheet.create({
    //css for parents container:
    container: {
        flex: 1,
    },
    container_mapview: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    container_contact: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        // borderTopColor: "red",
        // borderTopWidth: 0.5,
    },
    //css block 1:
    back_arrow: { flex: 1, marginLeft: 10 },
    star_icon: {
        width: 14,
        height: 14,
        marginRight: 3,
        marginLeft: 3,
    },
    //css block 2
    map_view: {
        width: 30 * rem,
        height: 26 * rem,
    },
    spinnerTextStyle: {
        color: "#FFF",
    },
    loading: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    //css block 3
    //block 3:
    car_icon: { width: 3 * rem, height: 3 * rem },
    block_button: {
        width: 13 * rem,
        height: 4.5 * rem,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        marginBottom: 15,
    },
    cancel_button: {
        backgroundColor: "#FF0000",
        width: 11 * rem,
        height: 4.5 * rem,
        borderRadius: 10,
    },
    text: {
        color: "#FFF",
        fontSize: 20,
        fontFamily: "Roboto_500Medium",
    },
});

export default styles;
