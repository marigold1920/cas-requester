import React from "react";
import { Text, StyleSheet } from "react-native";
const HomeScreen = () => {
  return <Text style={styles.text}>HomeScreen</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: "red",
  },
});

export default HomeScreen;
