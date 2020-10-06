import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonText = ({ gotoScreen, textContent, styleButton, styleText }) => {
  const { button, text } = styles;
  const combineStylesButton = StyleSheet.flatten([button, styleButton]); // sử dụng đê thay thế một số thuộc tính style cụ thể (vd: áp dụng width ở màn hình history)
  const combineStylesText = StyleSheet.flatten([text, styleText]);
  return (
    <TouchableOpacity style={combineStylesButton} onPress={gotoScreen}>
      <Text style={combineStylesText}>{textContent}</Text>
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
