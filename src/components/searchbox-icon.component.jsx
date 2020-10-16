import React from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";

const SearchBox = ({ placeholder }) => {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/icons/search.png")} style={styles.searchIcon} />
            <TextInput style={styles.searchText} placeholder={placeholder} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginVertical: 8,
        alignItems: "center",
        marginHorizontal: 25,
        flexDirection: "row",
        borderRadius: 50,
        backgroundColor: "#FFFFFF"
    },
    searchIcon: {
        height: 18,
        width: 18
    },
    searchText: {
        flex: 1,
        fontSize: 17,
        marginLeft: 10,
        fontFamily: "Texgyreadventor-regular"
    }
});
export default SearchBox;
