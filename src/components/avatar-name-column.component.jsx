import React from "react";

import { Text, View, Image, StyleSheet, contStyle } from "react-native";
import rem from "./constant.unit";

const AvatarNameCol = ({ imgSource, textContent, contStyle }) => {
  const { container } = styles;
  const combineStylesContainer = StyleSheet.flatten([container, contStyle]);
  // StyleSheet.flatten giúp thay đổi bất cứ thuộc tính nào của container, nếu không thay đổi sẽ áp dụng thuộc tính default
  return (
    <View style={combineStylesContainer}>
      <Image style={styles.image} source={imgSource} />
      <Text style={styles.text}>{textContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 13 * rem,
    height: 13 * rem,
    borderRadius: 100,
    marginBottom: 10,
  },
  text: {
    fontFamily: "Roboto_700Bold",
    fontSize: 25,
  },
});

export default AvatarNameCol;
