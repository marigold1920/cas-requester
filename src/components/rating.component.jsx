import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Rating = ({ level, size }) => (
    <>
        {level > 0 ? (
            <View style={styles.rating}>
                <Icon
                    name={`${level >= 1 ? "heart" : "hearto"}`}
                    size={size}
                    color="#ff0000"
                    style={{ marginHorizontal: 1 }}
                />
                <Icon
                    name={`${level >= 2 ? "heart" : "hearto"}`}
                    size={size}
                    color="#ff0000"
                    style={{ marginHorizontal: 1 }}
                />
                <Icon
                    name={`${level >= 3 ? "heart" : "hearto"}`}
                    size={size}
                    color="#ff0000"
                    style={{ marginHorizontal: 1 }}
                />
                <Icon
                    name={`${level >= 4 ? "heart" : "hearto"}`}
                    size={size}
                    color="#ff0000"
                    style={{ marginHorizontal: 1 }}
                />
                <Icon
                    name={`${level >= 5 ? "heart" : "hearto"}`}
                    size={size}
                    color="#ff0000"
                    style={{ marginHorizontal: 1 }}
                />
            </View>
        ) : null}
    </>
);

export default Rating;

const styles = StyleSheet.create({
    rating: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 5
    }
});
