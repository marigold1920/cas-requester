import React from "react";
import { View, Image, StyleSheet, TextInput } from "react-native";

const SearchBox = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icons/search.png")}
        style={styles.searchIcon}
      />
      <TextInput style={styles.searchText} placeholder={placeholder} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginTop: 10,
    alignItems: "center",
    marginRight: 25,
    marginLeft: 25,
    flexDirection: "row",
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  searchIcon: {
    height: 20,
    width: 20,
  },
  searchText: {
    fontSize: 20,
    width: 190,
    marginLeft: 5,
    fontFamily: "Roboto-Light",
  },
});
export default SearchBox;
