import { StyleSheet } from "react-native";
import rem from "../../components/constant.unit";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    //css for header
    headerBlock: {
        flex: 0.6,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10
    },
    headerProfile: {
        height: 50,
        width: 50,
        borderRadius: 40
    },
    headerText: {
        fontSize: 24,
        color: "#494958",
        fontFamily: "Texgyreadventor-bold",
        marginLeft: 5,
        width: 13 * rem
    },
    headerButton_noBorder: {
        borderRadius: 50,
        padding: 5,
        margin: 5
    },
    headerButton: {
        backgroundColor: "#fff",
        borderRadius: 50,
        padding: 5,
        margin: 5,
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowColor: "#C4D5F6",
        shadowOpacity: 0.3,
        elevation: 16
    },
    headerImg: {
        height: 20,
        width: 20,
        margin: 3
    },
    //css for search block
    searchBlock: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center"
    },
    //css for menu button
    menuBlock_column: {
        marginTop: 20,
        flex: 3,
        flexDirection: "column"
    },
    menuBlock_row: {
        flexDirection: "row",
        justifyContent: "center"
    },
    menu_title: {
        fontSize: 16,
        fontFamily: "Texgyreadventor-bold",
        width: 130,
        textAlign: "center"
    },
    menu_content: {
        marginTop: 7,
        width: 100,
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Texgyreadventor-regular"
    }
});
export default styles;
