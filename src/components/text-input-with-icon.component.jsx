import React from "react";
import { View, Image, StyleSheet, TextInput, Dimensions } from "react-native";

const TextInputIcon = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.bgr_image}>
        <Image source={props.imgSrc} style={styles.image} />
      </View>
      <TextInput
        style={styles.text_input}
        placeholder={props.placeholder}
        placeholderTextColor="#FFF"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.4)",
    flexDirection: "row",
    width: "90%",
    borderRadius: 60,
    marginBottom: 15,
  },
  bgr_image: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 70,
  },
  image: {
    width: 20,
    height: 20,
  },
  text_input: {
    fontSize: 20,
    fontFamily: "nunito.regular",
    width: 200,
    color: "#FFF",
    marginLeft: 7,
  },
});
export default TextInputIcon;
