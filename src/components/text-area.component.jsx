import React from "react";

import { Text, View, StyleSheet, TextInput } from "react-native";
import rem from "./constant.unit";

const TextArea = ({ textContent, contStyle }) => {
  const { container } = styles;
  const combineStylesContainer = StyleSheet.flatten([container, contStyle]);
  // StyleSheet.flatten giúp thay đổi bất cứ thuộc tính nào của container, nếu không thay đổi sẽ áp dụng thuộc tính default
  return (
    <View style={combineStylesContainer}>
      <Text style={styles.text}>{textContent}</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Type something"
        placeholderTextColor="grey"
        numberOfLines={5}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    width: "90%",
    marginBottom: 20,
  },
  text: {
    color: "#787881",
    fontFamily: "Nunito_400Regular",
    marginBottom: 8,
    fontSize: 16,
  },
  textArea: {
    fontFamily: "Nunito_400Regular",
    fontSize: 18,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 10,
    textAlignVertical: "top",
    height: 9 * rem,
  },
});

export default TextArea;
