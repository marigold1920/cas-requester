import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonText = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.gotoScreen}>
      <Text style={styles.text}>{props.textContent}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 250,
    backgroundColor: "#FFF",
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "red",
  },
});
export default ButtonText;
