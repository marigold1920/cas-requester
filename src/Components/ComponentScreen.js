import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const greeting = "Hi there";
  return (
    <View>
      <Text style={styles.textStyle}>ComponentScreen</Text>
      <Text>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "red",
  },
});

export default ComponentScreen;
