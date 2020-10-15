import { StyleSheet } from "react-native";
import rem from "../../components/constant.unit";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    //css for header
    headerBlock: {
        flex: 0.6,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    headerProfile: {
        height: 50,
        width: 50,
        borderRadius: 40,
    },
    headerText: {
        fontSize: 28,
        color: "#494958",
        fontFamily: "Texgyreadventor-regular",
        marginLeft: 5,
        fontWeight: "bold",
        width: 13 * rem,
    },
    headerButton_noBorder: {
        borderRadius: 50,
        padding: 5,
        margin: 5,
    },
    headerButton: {
        borderWidth: 0.6,
        borderColor: "#FFF",
        borderRadius: 50,
        padding: 5,
        margin: 5,
    },
    headerImg: {
        height: 25,
        width: 25,
    },
    //css for search block
    searchBlock: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    //css for menu button
    menuBlock_column: {
        marginTop: 20,
        flex: 3,
        flexDirection: "column",
    },
    menuBlock_row: {
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 20,
    },
    menu_Button_Left: {
        padding: 5,
        marginLeft: 5,
    },
    menu_Button_Right: {
        padding: 5,
    },
    menu_Img: {
        height: 180,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    menu_title: {
        fontSize: 16,
        fontFamily: "Texgyreadventor-bold",
        width: 130,
        textAlign: "center",
    },
    menu_content: {
        marginTop: 7,
        width: 100,
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Texgyreadventor-regular",
    },
});
export default styles;
