import React from "react";

import { View, Image, StyleSheet, ImageBackground } from "react-native";

const BackgroundImage = (props) => {
  return (
    <View style={props.styleContainer}>
      <Image style={styles.backgroundImage} source={props.imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: "absolute",
    zIndex: 0,
    width: " 100%",
    height: "100%",
  },
});

export default BackgroundImage;
